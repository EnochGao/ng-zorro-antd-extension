import { Injectable, signal } from '@angular/core';
import { NavLocale } from './nav.service';

/**
 * 全局语言状态（对标 NG-ZORRO 的中英切换）。
 * LayoutComponent 切换时更新，文档页等消费者读取。
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly locale = signal<NavLocale>('zh-cn');
}
