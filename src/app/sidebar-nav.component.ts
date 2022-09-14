import { Component } from '@angular/core';

import { NavListItemComponent } from './@my-org/design-system/components/nav-list/nav-list-item.component';
import { NavListComponent } from './@my-org/design-system/components/nav-list/nav-list.component';

@Component({
  selector: 'sidebar-nav',
  template: `<nav-list>
      <nav-list-item link="/page-1">Page 1</nav-list-item>
      <nav-list-item link="/page-2">Page 2</nav-list-item>
      <nav-list-item link="https://angular.io/">Angular</nav-list-item>
    </nav-list>

    <nav-list [expandable]="true" [title]="'Nested menu'">
      <nav-list-item link="/page-3">Page 3</nav-list-item>
      <nav-list-item link="/page-4">Page 4</nav-list-item>
    </nav-list>`,
  standalone: true,
  imports: [NavListComponent, NavListItemComponent],
})
export class SidebarNavComponent {}
