import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';

@Injectable({
	providedIn: 'root'
})
export class DashboardRouteGuard implements CanActivate {
	constructor(private router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     console.log('in guard service');

		if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {
			this.router.navigate(['/login']);

			return false;
		} else {
			return true;
		}
		// return true;
	}
}
