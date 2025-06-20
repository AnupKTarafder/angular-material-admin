import { Component, OnInit } from '@angular/core';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-libs-page',
  templateUrl: './libs-page.component.html',
  styleUrls: ['./libs-page.component.scss'],
  standalone: false,
})
export class LibsPageComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
