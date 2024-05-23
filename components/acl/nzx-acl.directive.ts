import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { NzxAclService } from './nzx-acl.service';
import { Subject, takeUntil } from 'rxjs';

interface AclContext {
  $implicit: string[];
  currentAcl: string;
}

@Directive({
  selector: '[nzxAcl]',
  exportAs: 'NzxAcl',
})
export class NzxAclDirective implements OnInit, OnDestroy {
  @Input('nzxAcl') codes: string | string[] = '';
  @Input() nzxAclElse?: TemplateRef<any>;

  @Input('nzxAclDataAcl')
  dataAcl = true;

  private destroy$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<AclContext>,
    private viewContainerRef: ViewContainerRef,
    private nzxAclService: NzxAclService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.viewContainerRef.clear();
    this.nzxAclService.permissions$
      .pipe(takeUntil(this.destroy$))
      .subscribe((acls) => {
        this.viewContainerRef.clear();
        this.judge(acls);
      });
  }

  private judge(acls: string[]) {
    if (Array.isArray(this.codes)) {
      const isFind = acls.some((acl) => {
        return this.codes.includes(acl) === true;
      });

      if (isFind) {
        this.createView(acls);
      } else {
        if (this.nzxAclElse) {
          this.viewContainerRef.createEmbeddedView(this.nzxAclElse);
        }
      }
    }

    if (typeof this.codes === 'string') {
      if (acls.includes(this.codes)) {
        this.createView(acls);
      } else {
        if (this.nzxAclElse) {
          this.viewContainerRef.createEmbeddedView(this.nzxAclElse);
        }
      }
    }
  }

  private createView(acls: string[]) {
    if (this.dataAcl) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: acls,
        currentAcl: this.codes,
      });
      this.cd.markForCheck();
    }
  }
}
