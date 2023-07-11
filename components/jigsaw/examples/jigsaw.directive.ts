const w = 310; // canvas宽度
const h = 155; // canvas高度
const l = 42; // 滑块边长
const r = 9; // 滑块半径
const PI = Math.PI;
const L = l + r * 2 + 3; // 滑块实际边长

function getRandomNumberByRange(start: number, end: number) {
  return Math.round(Math.random() * (end - start) + start);
}

function createCanvas(width: number, height: number) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function createImg(onload: any) {
  const img: any = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = onload;
  img.onerror = () => {
    img.setSrc(getRandomImgSrc()); // 图片加载失败的时候重新加载其他图片
  };

  img.setSrc = function (src: string) {
    const isIE = window.navigator.userAgent.indexOf('Trident') > -1;
    if (isIE) {
      // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
      const xhr = new XMLHttpRequest();
      xhr.onloadend = function (e: any) {
        const file = new FileReader(); // FileReader仅支持IE10+
        file.readAsDataURL(e.target.response);
        file.onloadend = function (e) {
          img.src = e.target.result;
        };
      };
      xhr.open('GET', src);
      xhr.responseType = 'blob';
      xhr.send();
    } else img.src = src;
  };

  img.setSrc(getRandomImgSrc());
  return img;
}

function createElement(tagName: string, className: string) {
  const element = document.createElement(tagName);
  className && (element.className = className);
  return element;
}

function setClass(element: Element, className: string) {
  element.className = className;
}

function addClass(element: Element, className: string) {
  element.classList.add(className);
}

function removeClass(element: Element, className: string) {
  element.classList.remove(className);
}

function getRandomImgSrc() {
  // return `https://picsum.photos/id/${getRandomNumberByRange(0, 1084)}/${w}/${h}`;
  return `https://winkong-frontend.oss-cn-qingdao.aliyuncs.com/images/wk-marinsmart-ui/v2.0/login/jigsaw/${getRandomNumberByRange(
    1,
    10
  )}.png`;
}

function drawPath(ctx: CanvasRenderingContext2D, x: number, y: number, operation) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
  ctx.lineTo(x + l, y);
  ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
  ctx.lineTo(x + l, y + l);
  ctx.lineTo(x, y + l);
  ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
  ctx.lineTo(x, y);
  ctx.lineWidth = 2;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.stroke();
  ctx.globalCompositeOperation = 'destination-over';
  operation === 'fill' ? ctx.fill() : ctx.clip();
}

function sum(x: number, y: number) {
  return x + y;
}

function square(x: number) {
  return x * x;
}

import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Directive({
  selector: '[nzxJigsaw]',
})
export class JigsawDirective implements OnInit {
  @Input() width = 310;
  @Input() height = 155;

  @Output() jwRefresh = new EventEmitter();
  @Output() jwSuccess = new EventEmitter();
  @Output() jwFail = new EventEmitter();

  canvas: HTMLCanvasElement;
  block: HTMLCanvasElement;
  sliderContainer: HTMLDivElement;
  loadingContainer: HTMLDivElement;
  refreshIcon: HTMLDivElement;
  slider: HTMLDivElement;
  sliderMask: HTMLDivElement;
  sliderIcon: HTMLDivElement;
  text: HTMLSpanElement;
  img: any;
  x: number;
  y: number;
  canvasCtx: CanvasRenderingContext2D;
  blockCtx: CanvasRenderingContext2D;
  trail: number[];
  private el: any;

  constructor(private elementRef: ElementRef, private translatePipe: TranslatePipe) {
    this.el = elementRef.nativeElement;
  }
  ngOnInit(): void {
    this.initDOM();
    this.initImg();
    this.bindEvents();
  }

  initDOM() {
    const { width, height } = this;
    const canvas = createCanvas(width, height); // 画布
    const block = createCanvas(width, height); // 滑块
    setClass(block, 'jigsaw-block');
    const sliderContainer = createElement('div', 'jigsaw-sliderContainer');
    sliderContainer.style.width = width + 'px';
    sliderContainer.style.pointerEvents = 'none';
    const refreshIcon = createElement('div', 'jigsaw-refreshIcon');
    const sliderMask = createElement('div', 'jigsaw-sliderMask');
    const slider = createElement('div', 'jigsaw-slider');
    const sliderIcon = createElement('span', 'jigsaw-sliderIcon');
    const text = createElement('span', 'jigsaw-sliderText');
    text.innerHTML = '向右滑动填充拼图';

    // 增加loading
    const loadingContainer = createElement('div', 'jigsaw-loadingContainer');
    loadingContainer.style.width = width + 'px';
    loadingContainer.style.height = height + 'px';
    const loadingIcon = createElement('div', 'jigsaw-loadingIcon');
    const loadingText = createElement('span', '');
    loadingText.innerHTML = '加载中...';
    loadingContainer.appendChild(loadingIcon);
    loadingContainer.appendChild(loadingText);

    const el = this.el;
    el.style.width = width + 'px';
    el.style.height = height + 'px';
    el.style.position = 'relative';
    el.appendChild(loadingContainer);
    el.appendChild(canvas);
    el.appendChild(refreshIcon);
    el.appendChild(block);
    slider.appendChild(sliderIcon);
    sliderMask.appendChild(slider);
    sliderContainer.appendChild(sliderMask);
    sliderContainer.appendChild(text);
    el.appendChild(sliderContainer);

    Object.assign(this, {
      canvas,
      block,
      sliderContainer,
      loadingContainer,
      refreshIcon,
      slider,
      sliderMask,
      sliderIcon,
      text,
      canvasCtx: canvas.getContext('2d'),
      blockCtx: block.getContext('2d'),
    });
  }

  setLoading(isLoading: boolean) {
    this.loadingContainer.style.display = isLoading ? '' : 'none';
    this.sliderContainer.style.pointerEvents = isLoading ? 'none' : '';
  }

  initImg() {
    const img = createImg(() => {
      this.setLoading(false);
      this.draw(img);
    });
    this.img = img;
  }

  draw(img: any) {
    const { width, height } = this;
    // 随机位置创建拼图形状
    this.x = getRandomNumberByRange(L + 10, width - (L + 10));
    this.y = getRandomNumberByRange(10 + r * 2, height - (L + 10));
    drawPath(this.canvasCtx, this.x, this.y, 'fill');
    drawPath(this.blockCtx, this.x, this.y, 'clip');

    // 画入图片
    this.canvasCtx.drawImage(img, 0, 0, width, height);
    this.blockCtx.drawImage(img, 0, 0, width, height);

    // 提取滑块并放到最左边
    const y = this.y - r * 2 - 1;
    const ImageData = this.blockCtx.getImageData(this.x - 3, y, L, L);
    this.block.width = L;
    this.blockCtx.putImageData(ImageData, 0, y);
  }

  bindEvents() {
    this.el.onselectstart = () => false;
    this.refreshIcon.onclick = () => {
      this.reset();
      this.jwRefresh.emit();
    };

    let originX: number;
    let originY: number;
    let trail = [];
    let isMouseDown = false;

    const handleDragStart = (e: any) => {
      originX = e.clientX || e.touches[0].clientX;
      originY = e.clientY || e.touches[0].clientY;
      isMouseDown = true;
    };
    const width = this.width;
    const handleDragMove = (e: any) => {
      if (!isMouseDown) return false;
      e.preventDefault();
      const eventX = e.clientX || e.touches[0].clientX;
      const eventY = e.clientY || e.touches[0].clientY;
      const moveX = eventX - originX;
      const moveY = eventY - originY;
      if (moveX < 0 || moveX + 38 >= width) return false;
      this.slider.style.left = moveX + 'px';
      const blockLeft = ((width - 40 - 20) / (width - 40)) * moveX;
      this.block.style.left = blockLeft + 'px';

      addClass(this.sliderContainer, 'jigsaw-sliderContainer_active');
      this.sliderMask.style.width = moveX + 'px';
      trail.push(moveY);
      return false;
    };

    const handleDragEnd = (e: any) => {
      if (!isMouseDown) return false;
      isMouseDown = false;
      const eventX = e.clientX || e.changedTouches[0].clientX;
      if (eventX === originX) return false;
      removeClass(this.sliderContainer, 'jigsaw-sliderContainer_active');
      this.trail = trail;
      const { spliced, verified } = this.verify();
      if (spliced) {
        if (verified) {
          addClass(this.sliderContainer, 'jigsaw-sliderContainer_success');
          this.jwSuccess.emit();
        } else {
          addClass(this.sliderContainer, 'jigsaw-sliderContainer_fail');
          this.text.innerHTML = this.translatePipe.transform('请再试一次');
          this.reset();
        }
      } else {
        addClass(this.sliderContainer, 'jigsaw-sliderContainer_fail');
        this.jwFail.emit();
        setTimeout(this.reset.bind(this), 1000);
      }
      return false;
    };
    this.slider.addEventListener('mousedown', handleDragStart);
    this.slider.addEventListener('touchstart', handleDragStart);
    this.block.addEventListener('mousedown', handleDragStart);
    this.block.addEventListener('touchstart', handleDragStart);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);
  }

  verify() {
    const arr = this.trail; // 拖动时y轴的移动距离
    const average = arr.reduce(sum) / arr.length;
    const deviations = arr.map((x) => x - average);
    const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
    const left = parseInt(this.block.style.left);
    return {
      spliced: Math.abs(left - this.x) < 10,
      verified: stddev !== 0, // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
    };
  }

  reset() {
    const { width, height } = this;
    // 重置样式
    setClass(this.sliderContainer, 'jigsaw-sliderContainer');
    this.slider.style.left = 0 + 'px';
    this.block.width = width;
    this.block.style.left = 0 + 'px';
    this.sliderMask.style.width = 0 + 'px';

    // 清空画布
    this.canvasCtx.clearRect(0, 0, width, height);
    this.blockCtx.clearRect(0, 0, width, height);

    // 重新加载图片
    this.setLoading(true);
    this.img.setSrc(getRandomImgSrc());
  }
}
