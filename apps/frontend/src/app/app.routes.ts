import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@crefaz-monorepo/shared/ui-layout').then(
        (m) => m.SharedUiLayoutModule
      ),
  },
];
