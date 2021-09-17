import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloginGuard implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate(  route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('accessToken') != null) {
      this.router.navigate(['/dashbored'])
      return false;
    }
    else{
     return true;
    }
  }
  
}
