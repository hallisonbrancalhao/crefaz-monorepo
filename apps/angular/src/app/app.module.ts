import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoupensComponent } from './coupens/coupens.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
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
    LoginComponent,
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
