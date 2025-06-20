import { Component, OnInit } from '@angular/core';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss'],
  standalone: false,
})
export class ChartsPageComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
