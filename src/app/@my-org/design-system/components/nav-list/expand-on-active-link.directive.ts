import { Directive, Input, QueryList, AfterContentInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { from, filter, mergeMap } from 'rxjs';

import { NavListItemComponent } from './nav-list-item.component';

@Directive({
  selector: '[expandOnActiveLink]',
  exportAs: 'expandOnActiveLink',
  standalone: true,
})
export class ExpandOnActiveLinkDirective implements AfterContentInit {
  @Input()
  navListItemComponents: QueryList<NavListItemComponent> | null = null;

  constructor(private panel: MatExpansionPanel) {}

  ngAfterContentInit(): void {
    const navListItems = this.navListItemComponents?.toArray();

    if (navListItems) {
      from(navListItems)
        .pipe(
          mergeMap((item) => item.isActive),
          filter((isActive) => isActive)
        )
        .subscribe(() => {
          // Looks like there's a bug in `mat-drawer` component
          // that prevents `mat-expansion-panel` from expanding
          // This littl' fella fixes it :)
          setTimeout(() => this.panel.open(), 0);
        });
    }
  }
}
