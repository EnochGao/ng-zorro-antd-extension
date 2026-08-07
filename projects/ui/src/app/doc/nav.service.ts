import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NavItem {
  id?: string;
  title: string;
  subtitle?: string;
  path?: string;
  importSpecifier?: string;
  examples?: string[];
  overview?: boolean;
  api?: boolean;
  order?: number;
  category?: string;
  originPath?: string;
  channelPath?: string;
  items?: NavItem[];
  lib?: string;
}

export interface NavGroup {
  title: string;
  path: string;
  lib?: string;
  items: NavItem[];
}

export type NavLocale = 'zh-cn' | 'en-us';

@Injectable({ providedIn: 'root' })
export class NavService {
  private readonly http = inject(HttpClient);

  getNav(locale: NavLocale): Observable<NavGroup[]> {
    return this.http.get<NavGroup[]>(
      `assets/navigations/${locale}.json`
    );
  }
}
