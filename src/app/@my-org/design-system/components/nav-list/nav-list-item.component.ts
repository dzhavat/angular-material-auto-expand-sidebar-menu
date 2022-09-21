import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';

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
        (isActiveChange)="isActive.emit($event)"
        ><ng-container *ngTemplateOutlet="templateContent"></ng-container
      ></a>
    </ng-template>

    <ng-template #templateContent>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class NavListItemComponent {
  @Input() link: string | null = null;
  @Input() target: '_self' | '_blank' | '_parent' | '_top' | null = null;

  @Output() isActive = new EventEmitter<boolean>();

  get isExternalLink(): boolean {
    return /^(http:\/\/|https:\/\/)/i.test(this.link ?? '');
  }
}
