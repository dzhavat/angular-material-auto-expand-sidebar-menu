import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  template: `<h2>Page 1</h2>`,
  standalone: true,
})
class Page1Component {}

@Component({
  template: `<h2>Page 2</h2>`,
  standalone: true,
})
class Page2Component {}

@Component({
  template: `<h2>Page 3</h2>`,
  standalone: true,
})
class Page3Component {}

@Component({
  template: `<h2>Page 4</h2>`,
  standalone: true,
})
class Page4Component {}

function generateComponent(content: string) {
  @Component({
    template: `<h2>{{ content }}</h2>`,
    standalone: true,
  })
  class RouteComponent {
    content = content;
  }

  return RouteComponent;
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-1',
    pathMatch: 'full',
  },
  {
    path: 'page-1',
    component: Page1Component,
  },
  {
    path: 'page-2',
    component: Page2Component,
  },
  {
    path: 'page-3',
    component: Page3Component,
  },
  {
    path: 'page-4',
    component: Page4Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
