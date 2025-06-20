import { Component, OnInit } from '@angular/core';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-licences-page',
  templateUrl: './licences-page.component.html',
  styleUrls: ['./licences-page.component.scss'],
  standalone: false,
})
export class LicencesPageComponent implements OnInit {
  public routes: typeof routes = routes;

  constructor() {}

  ngOnInit(): void {}
}
