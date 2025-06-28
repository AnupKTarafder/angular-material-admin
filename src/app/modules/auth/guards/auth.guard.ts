import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { routes } from '@app/consts';

@Injectable()
export class AuthGuard {
  public routers: typeof routes = routes;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
      return false;
    }
  }
}
