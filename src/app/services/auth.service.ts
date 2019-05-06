import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Iuser } from '../model/iuser';
// import { URLSearchParams } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  public isAuthenticated():boolean{
    const token = localStorage.getItem('token');
    //const tokenExpire = localStorage.getItem('token-expire');
    const profile = localStorage.getItem('profile');
    if(token && profile){
      return true;
    }else{
      return false;
    }
  }

  login(userInfo: Iuser){

  }

  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    return this._http.get(environment.services.user.url + "logout");
  }
  hello() {
    return this._http.get(environment.services.user.url + "hello");
  }
  getUserInfoProfile() {
    return this._http.get(environment.services.user.url + "getUserInfo");
  }

}
