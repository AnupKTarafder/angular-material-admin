import { Component } from '@angular/core';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-ui-page',
  templateUrl: './ui-page.component.html',
  styleUrls: ['./ui-page.component.scss'],
  standalone: false,
})
export class UiPageComponent {
  public routes: typeof routes = routes;
}
