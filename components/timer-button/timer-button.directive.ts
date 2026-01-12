import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  inject,
} from '@angular/core';
import {
  ExtensionWithConfig,
  NzxConfigKey,
  NzxConfigService,
} from 'ng-zorro-antd-extension/core/config';
import {
  Subject,
  fromEvent,
  interval,
  map,
  startWith,
  takeUntil,
  takeWhile,
} from 'rxjs';

const NZ_CONFIG_MODULE_NAME: NzxConfigKey = 'nzxTimerButton';

@Directive({
  selector: 'button[nzxTimerButton]',
  exportAs: 'NzxTimerButton',
})
export class NzxTimerButtonDirective implements AfterViewInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private cd = inject(ChangeDetectorRef);

  @ExtensionWithConfig() @Input() duration: number = 3;

  @Output() isCompleted = new EventEmitter<boolean>(true);
  @Output() remainingTime = new EventEmitter<number>(true);

  @HostBinding('attr.disabled') get _disabled() {
    return this.disabled || null;
  }
  private destroy$ = new Subject<void>();

  private disabled: boolean = false;

  readonly _nzModuleName: NzxConfigKey = NZ_CONFIG_MODULE_NAME;
  private nzxConfigService: NzxConfigService = inject(NzxConfigService);

  ngAfterViewInit(): void {
    this.isCompleted.emit(true);
    this.remainingTime.emit(0);

    fromEvent<MouseEvent>(this.elementRef.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe((event) => {
        this.disabled = true;
        this.cd.markForCheck();
        this.isCompleted.emit(false);
        interval(1000)
          .pipe(
            startWith(-1),
            map((x) => this.duration - 1 - x - 1),
            takeWhile((x) => x >= 0),
            takeUntil(this.destroy$)
          )
          .subscribe((i) => {
            this.remainingTime.emit(i);
            if (i === 0) {
              this.disabled = false;
              this.isCompleted.emit(true);
              this.cd.markForCheck();
            }
          });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
