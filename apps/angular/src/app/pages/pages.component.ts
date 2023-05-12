import { Component } from '@angular/core';

@Component({
  selector: 'crefaz-monorepo-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  projects = [
    {
      name: 'Project',
      category: 'Project',
    },
    {
      name: 'Project',
      category: 'Project',
    },
    {
      name: 'Project',
      category: 'Project',
    },
  ];
}
