import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shared-ui-layout',
    loadChildren: () =>
      import('@crefaz-monorepo/shared/ui-layout').then(
        (m) => m.SharedUiLayoutModule
      ),
  },
];
