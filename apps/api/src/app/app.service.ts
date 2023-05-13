import { Injectable } from '@nestjs/common';
import { UserSession } from '@crefaz-monorepo/shared/data-access';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getSession(): UserSession {
    const data: UserSession = {
      token: 'ASDFKLASDG1568DG69846846AE8V4WE849',
      expires: Date.now(),
      models: [
        {
          route: 'dashboard',
          icon: 'fal fa-home',
          label: 'Dashboard',
          permission: 3,
        },
        {
          route: 'statistics',
          icon: 'fal fa-chart-bar',
          label: 'Estatísticas',
          permission: 3,
        },
        {
          route: 'coupens',
          icon: 'fal fa-tags',
          label: 'Dados',
          permission: 3,
        },
        {
          route: 'pages',
          icon: 'fal fa-file',
          label: 'Páginas',
          permission: 3,
        },
        {
          route: 'settings',
          icon: 'fal fa-cog',
          label: 'Configurações',
          permission: 3,
        },
      ],
    };
    return data;
  }
}
