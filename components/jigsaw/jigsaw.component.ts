import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

const w = 310; // canvas宽度
const h = 155; // canvas高度
const l = 42; // 滑块边长
const r = 9; // 滑块半径
const PI = Math.PI;
const L = l + r * 2 + 3; // 滑块实际边长
@Component({
  selector: 'nzx-jigsaw',
  templateUrl: './jigsaw.component.html',
  styleUrls: ['./jigsaw.component.less'],
})
export class NzxJigsawComponent implements OnInit, AfterViewInit {
  @Input() width = 310;
  @Input() height = 155;

  @Output() jwRefresh = new EventEmitter();
  @Output() jwSuccess = new EventEmitter();
  @Output() jwFail = new EventEmitter();

  @ViewChild('canvasCtx') private canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('blockCtx') private blockRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('sliderContainer')
  private sliderContainerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('slider')
  private sliderRef!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderMask')
  private sliderMaskRef!: ElementRef<HTMLDivElement>;

  img: any;
  x: number = 0;
  y: number = 0;

  isLoading = false;

  constructor() {}

  ngAfterViewInit(): void {
    console.log('dddd', this.canvasRef);
    this.initImg();
  }

  ngOnInit() {
    console.log(11);
  }
  selectstart() {
    return false;
  }

  refresh() {
    this.reset();
    this.jwRefresh.emit();
  }

  private reset() {
    const { width, height } = this;
    // 重置样式
    this.sliderContainerRef.nativeElement.className = 'jigsaw-sliderContainer';
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
    this.setImageSrc(this.getRandomImgSrc(), this.img);
  }

  private initImg() {
    const img = this.createImg(() => {
      this.isLoading = false;
      this.draw(img);
    });
    this.img = img;
  }
  private draw(img: any) {
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
  }

  private setImageSrc(src: string, img: HTMLImageElement) {
    const isIE = window.navigator.userAgent.indexOf('Trident') > -1;
    if (isIE) {
      // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
      const xhr = new XMLHttpRequest();
      xhr.onloadend = function (e: any) {
        const file = new FileReader(); // FileReader仅支持IE10+
        file.readAsDataURL(e.target.response);
        file.onloadend = function (e) {
          img.src = e.target?.result as string;
        };
      };
      xhr.open('GET', src);
      xhr.responseType = 'blob';
      xhr.send();
    } else img.src = src;
  }

  private createImg(onload: any) {
    const img: any = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = onload;
    img.onerror = () => {
      // 图片加载失败的时候重新加载其他图片
      this.setImageSrc(this.getRandomImgSrc(), img);
    };
    this.setImageSrc(this.getRandomImgSrc(), img);
    return img;
  }

  private getRandomImgSrc() {
    return `https://picsum.photos/id/${this.getRandomNumberByRange(
      0,
      1084
    )}/${310}/${155}`;
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
