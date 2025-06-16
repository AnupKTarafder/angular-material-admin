import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { routes } from '../../../consts';

@Injectable()
export class AuthGuard  {
  public routers: typeof routes = routes;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
    }
  }
}
