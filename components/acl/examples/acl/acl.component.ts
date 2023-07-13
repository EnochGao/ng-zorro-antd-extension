import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NzxAclModule } from 'ng-zorro-antd-extension/acl/nzx-acl.module';

import { NzxAclService } from 'ng-zorro-antd-extension/acl';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzDividerModule, NzxAclModule],
  selector: 'nzx-acl-example',
  template: `
    <button nz-button nzType="default" (click)="loadPermissions()">
      load permissions
    </button>
    <button nz-button nzType="default" (click)="changeDataAcl()">
      change dataAcl
    </button>
    <button nz-button nzType="default" (click)="addAcl()">add edit</button>
    <button nz-button nzType="default" (click)="removeAcl()">
      remove edit
    </button>
    <nz-divider nzText="divider"></nz-divider>
    <div>
      <button
        *nzxAcl="
          'add';
          let allAcls;
          let currentAcl = currentAcl;
          dataAcl: dataAcl;
          else: elseTemp
        "
        nz-button
        nzType="dashed"
      >
        add btn
      </button>
      <button *nzxAcl="['edit']" nz-button nzType="dashed">edit btn</button>
      <ng-template #elseTemp>add button have not permission </ng-template>
    </div>
  `,
})
export class NzxAclExampleComponent {
  dataAcl = true;
  aclService = inject(NzxAclService);

  loadPermissions() {
    this.aclService.loadPermissions(['add']);
  }

  addAcl() {
    this.aclService.addPermission('edit');
  }

  removeAcl() {
    this.aclService.removePermission('edit');
  }

  changeDataAcl() {
    this.dataAcl = !this.dataAcl;
    this.aclService.refreshPermission();
  }
}
