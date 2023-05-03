import { Route } from '@angular/router';
import { SidenavShellComponent } from './sidenav-shell/sidenav-shell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

export const sharedUiLayoutRoutes: Route[] = [
  {
    path: '',
    component: SidenavShellComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  },
];
