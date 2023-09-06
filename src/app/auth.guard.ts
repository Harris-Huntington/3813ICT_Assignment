import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sharedService: SharedService, private router: Router) {}

  canActivate(): boolean {
    if (!this.sharedService.isLoggedIn) {
      // User is not logged in, redirect to the login page
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
