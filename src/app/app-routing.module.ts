import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    component: generateComponent('Page 1'),
  },
  {
    path: 'page-2',
    component: generateComponent('Page 2'),
  },
  {
    path: 'page-3',
    component: generateComponent('Page 3'),
  },
  {
    path: 'page-4',
    component: generateComponent('Page 4'),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
