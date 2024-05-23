import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

const l = 42; // 滑块边长
const r = 9; // 滑块半径
const PI = Math.PI;
const L = l + r * 2 + 3; // 滑块实际边长

@Component({
  selector: 'nzx-jigsaw',
  templateUrl: './jigsaw.component.html',
  styleUrls: ['./jigsaw.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxJigsawComponent implements AfterViewInit {
  @Input() width = 310;
  @Input() height = 155;
  @Input() nzxLoadingText = '加载中...';
  @Input() nzxTipText = '向右滑动填充拼图';
  @Input() nzxBgImgUrl: string | string[] = '';

  @Output() nzxOnRefresh = new EventEmitter<void>();
  @Output() nzxOnSuccess = new EventEmitter<void>();
  @Output() nzxOnFail = new EventEmitter<void>();

  isLoading = false;

  @ViewChild('canvasCtx')
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  @ViewChild('blockCtx')
  private blockRef!: ElementRef<HTMLCanvasElement>;

  @ViewChild('sliderContainer')
  private sliderContainerRef!: ElementRef<HTMLDivElement>;

  @ViewChild('slider')
  private sliderRef!: ElementRef<HTMLDivElement>;

  @ViewChild('sliderMask')
  private sliderMaskRef!: ElementRef<HTMLDivElement>;

  private img: any;
  private x: number = 0;
  private y: number = 0;

  private originX: number = 0;
  private originY: number = 0;
  private trail: any[] = [];
  private isMouseDown = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initImg();

    const handleDragMove = (e: any) => {
      if (!this.isMouseDown) {
        return false;
      }
      e.preventDefault();
      const eventX = e.clientX || e.touches[0].clientX;
      const eventY = e.clientY || e.touches[0].clientY;
      const moveX = eventX - this.originX;
      const moveY = eventY - this.originY;
      if (moveX < 0 || moveX + 38 >= this.width) return false;
      this.sliderRef.nativeElement.style.left = moveX + 'px';
      const blockLeft = ((this.width - 40 - 20) / (this.width - 40)) * moveX;
      this.blockRef.nativeElement.style.left = blockLeft + 'px';
      this.sliderContainerRef.nativeElement.classList.add(
        'nzx-jigsaw-slider-container-active'
      );
      this.sliderMaskRef.nativeElement.style.width = moveX + 'px';
      this.trail.push(moveY);
      return false;
    };

    const handleDragEnd = (e: any) => {
      if (!this.isMouseDown) {
        return false;
      }
      this.isMouseDown = false;
      const eventX = e.clientX || e.changedTouches[0].clientX;
      if (eventX === this.originX) {
        return false;
      }
      this.sliderContainerRef.nativeElement.classList.remove(
        'nzx-jigsaw-slider-container-active'
      );
      this.trail = this.trail;
      const { spliced, verified } = this.verify();

      if (spliced) {
        if (verified) {
          this.sliderContainerRef.nativeElement.classList.add(
            'nzx-jigsaw-slider-container-success'
          );
          this.nzxOnSuccess.emit();
        } else {
          this.sliderContainerRef.nativeElement.classList.add(
            'nzx-jigsaw-slider-container-fail'
          );
          this.nzxTipText = '请再试一次';
          this.reset();
        }
      } else {
        this.sliderContainerRef.nativeElement.classList.add(
          'nzx-jigsaw-slider-container-fail'
        );
        this.nzxOnFail.emit();
        setTimeout(() => this.reset(), 1000);
      }
      return false;
    };

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);
  }

  selectstart() {
    return false;
  }

  refresh() {
    this.reset();
    this.nzxOnRefresh.emit();
  }

  handleDragStart(e: any) {
    this.originX = e.clientX || e.touches[0].clientX;
    this.originY = e.clientY || e.touches[0].clientY;
    this.isMouseDown = true;
  }

  private verify() {
    const arr = this.trail; // 拖动时y轴的移动距离
    const average = arr.reduce((x: number, y: number) => x + y) / arr.length;
    const deviations = arr.map((x) => x - average);
    const stddev = Math.sqrt(
      deviations
        .map((x: number) => x * x)
        .reduce((x: number, y: number) => x + y) / arr.length
    );
    const left = parseInt(this.blockRef.nativeElement.style.left);
    return {
      spliced: Math.abs(left - this.x) < 10,
      verified: stddev !== 0, // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
    };
  }

  private reset() {
    const { width, height } = this;
    // 重置样式
    this.sliderContainerRef.nativeElement.className =
      'nzx-jigsaw-slider-container';
    this.sliderRef.nativeElement.style.left = 0 + 'px';
    this.blockRef.nativeElement.width = width;
    this.blockRef.nativeElement.style.left = 0 + 'px';
    this.sliderMaskRef.nativeElement.style.width = 0 + 'px';

    // 清空画布
    this.canvasRef.nativeElement
      .getContext('2d')!
      .clearRect(0, 0, width, height);
    this.blockRef.nativeElement
      .getContext('2d')!
      .clearRect(0, 0, width, height);

    // 重新加载图片
    this.isLoading = true;
    this.cd.markForCheck();
    this.setImageSrc(this.getRandomImgSrc(), this.img);
  }

  private initImg() {
    const img: HTMLImageElement = new Image();
    img.style.objectFit = 'cover';
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      this.isLoading = false;
      this.draw(img);
    };
    img.onerror = () => {
      // 图片加载失败的时候重新加载其他图片
      this.setImageSrc(this.getRandomImgSrc(), img);
    };
    this.setImageSrc(this.getRandomImgSrc(), img);
    this.img = img;
  }

  private draw(img: HTMLImageElement) {
    const { width, height } = this;
    // 随机位置创建拼图形状
    this.x = this.getRandomNumberByRange(L + 10, width - (L + 10));
    this.y = this.getRandomNumberByRange(10 + r * 2, height - (L + 10));
    this.drawPath(
      this.canvasRef.nativeElement.getContext('2d')!,
      this.x,
      this.y,
      'fill'
    );
    this.drawPath(
      this.blockRef.nativeElement.getContext('2d')!,
      this.x,
      this.y,
      'clip'
    );

    // 画入图片
    this.canvasRef.nativeElement
      .getContext('2d')!
      .drawImage(img, 0, 0, width, height);
    this.blockRef.nativeElement
      .getContext('2d')!
      .drawImage(img, 0, 0, width, height);

    // 提取滑块并放到最左边
    const y = this.y - r * 2 - 1;
    const ImageData = this.blockRef.nativeElement
      .getContext('2d')!
      .getImageData(this.x - 3, y, L, L);
    this.blockRef.nativeElement!.width = L;
    this.blockRef.nativeElement.getContext('2d')!.putImageData(ImageData, 0, y);
    this.cd.markForCheck();
  }

  private setImageSrc(src: string, img: HTMLImageElement) {
    const isIE = window.navigator.userAgent.indexOf('Trident') > -1;
    if (isIE) {
      // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
      const xhr = new XMLHttpRequest();
      xhr.onloadend = (e: any) => {
        const file = new FileReader(); // FileReader仅支持IE10+
        file.readAsDataURL(e.target.response);
        file.onloadend = (e) => {
          img.src = e.target?.result as string;
        };
      };
      xhr.open('GET', src);
      xhr.responseType = 'blob';
      xhr.send();
    } else {
      img.src = src;
    }
  }

  private getRandomImgSrc() {
    if (this.nzxBgImgUrl && typeof this.nzxBgImgUrl == 'string') {
      return this.nzxBgImgUrl;
    }

    if (
      this.nzxBgImgUrl &&
      Array.isArray(this.nzxBgImgUrl) &&
      this.nzxBgImgUrl.length
    ) {
      return this.nzxBgImgUrl[
        this.getRandomNumberByRange(0, this.nzxBgImgUrl.length - 1)
      ];
    }
    return `https://picsum.photos/id/${this.getRandomNumberByRange(0, 1084)}/${
      this.width
    }/${this.height}`;
  }

  private getRandomNumberByRange(start: number, end: number) {
    return Math.round(Math.random() * (end - start) + start);
  }

  private drawPath(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    operation: any
  ) {
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
}
