import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  Http,
  HttpImpl,
  ProductFacade,
  ProductRepository,
  ProductRepositoryImpl,
} from '@crefaz-monorepo/shared/data-access';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: 'url.token',
      useValue: 'http://localhost:3003/api',
    },
    {
      provide: Http,
      useClass: HttpImpl,
      deps: ['url.token'],
    },
    {
      provide: 'user.endpoint.token',
      useValue: 'products',
    },
    {
      provide: ProductRepository,
      useClass: ProductRepositoryImpl,
      deps: [Http, 'user.endpoint.token'],
    },
    {
      provide: ProductFacade,
      useClass: ProductFacade,
      deps: [ProductRepository],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
