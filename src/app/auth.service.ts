import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private toolsUrl = 'https://gtatoolsapi.herokuapp.com';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.toolsUrl}/users/login`, {username, password});
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    return this.http.post(`${this.toolsUrl}/users/logout`, {});
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }


  public readToken() {
    const token = localStorage.getItem('token');
    return this.jwtHelper.decodeToken(token);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
