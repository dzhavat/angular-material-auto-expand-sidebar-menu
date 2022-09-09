import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { Subject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nav-list-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatRippleModule],
  template: `
    <a
      *ngIf="isExternalLink; else internalLink"
      mat-list-item
      mat-ripple
      [href]="link"
      [attr.target]="target"
      ><ng-container *ngTemplateOutlet="templateContent"></ng-container
    ></a>

    <ng-template #internalLink>
      <a
        mat-list-item
        mat-ripple
        [routerLink]="link"
        routerLinkActive="active"
        (isActiveChange)="onRouterLinkActive($event)"
        ><ng-container *ngTemplateOutlet="templateContent"></ng-container
      ></a>
    </ng-template>

    <ng-template #templateContent>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class NavListItemComponent {
  private isActiveSubject = new Subject<boolean>();

  public readonly isActive$ = this.isActiveSubject.asObservable();

  @Input() link: string | null = null;
  @Input() target: '_self' | '_blank' | '_parent' | '_top' | null = null;

  get isExternalLink(): boolean {
    return /^(http:\/\/|https:\/\/)/i.test(this.link ?? '');
  }

  onRouterLinkActive(isActive: boolean) {
    this.isActiveSubject.next(isActive);
  }
}
