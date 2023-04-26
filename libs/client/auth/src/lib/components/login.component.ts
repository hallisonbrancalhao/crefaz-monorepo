import { Component } from '@angular/core';
import { ClientAuthForm } from '../client-auth.form';
import { AuthComponent } from './auth.component';

@Component({
  selector: 'crefaz-monorepo,fieldset[crefaz-monorepo-login]',
  templateUrl: './auth.component.html',
})
export class LoginComponent extends AuthComponent {
  form = new ClientAuthForm();
}
