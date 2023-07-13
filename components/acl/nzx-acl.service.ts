import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NzxAclService {
  public permissions$: Observable<string[]>;

  private permissionsSource: BehaviorSubject<string[]>;

  constructor() {
    this.permissionsSource = new BehaviorSubject<string[]>([]);
    this.permissions$ = this.permissionsSource.asObservable();
  }

  /** 加载权限 */
  loadPermissions(permissions: string[]) {
    this.permissionsSource.next([
      ...this.permissionsSource.value,
      ...permissions,
    ]);
  }

  /** 含有权限 */
  hasPermission(permission: string) {
    return this.permissionsSource.value.includes(permission);
  }

  /** 添加权限 */
  addPermission(permission: string) {
    if (this.hasPermission(permission)) {
      return;
    }
    const permissions = [...this.permissionsSource.value, permission];
    this.permissionsSource.next(permissions);
  }

  /** 移除权限 */
  removePermission(permission: string) {
    const permissions = this.permissionsSource.value.filter(
      (p) => p !== permission
    );
    this.permissionsSource.next(permissions);
  }

  /** 刷新权限 */
  refreshPermission() {
    setTimeout(() => {
      this.permissionsSource.next(this.permissionsSource.value);
    }, 0);
  }
}
