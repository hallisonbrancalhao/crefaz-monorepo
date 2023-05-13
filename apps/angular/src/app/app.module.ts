import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  Http,
  HttpImpl,
  UserFacade,
  UserFacadeImpl,
  UserRepository,
  UserRepositoryImpl,
} from '@crefaz-monorepo/shared/data-access';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    SettingsComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    {
      provide: 'url.api',
      useValue: '/api',
    },
    {
      provide: 'url.users',
      useValue: 'users',
    },
    {
      provide: Http,
      useClass: HttpImpl,
      deps: ['url.api'],
    },
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
      deps: [Http, 'url.users'],
    },
    {
      provide: UserFacade,
      useClass: UserFacadeImpl,
      deps: [UserRepository],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
