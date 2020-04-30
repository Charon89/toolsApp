import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  // Methods

  canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
