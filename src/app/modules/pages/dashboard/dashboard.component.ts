import { Component, OnInit } from '@angular/core';
import { routes } from '../../../consts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent implements OnInit {
  public routes: typeof routes = routes;
  constructor() {}

  ngOnInit(): void {}
}
