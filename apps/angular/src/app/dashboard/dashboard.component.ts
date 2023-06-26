import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@crefaz-monorepo/shared/data-access';

@Component({
  selector: 'crefaz-monorepo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(readonly userFacade: UserFacade) {
    console.log('userFacade:', userFacade);
  }

  ngOnInit(): void {}
}
