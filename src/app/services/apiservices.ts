import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginRequest } from '../signin/signin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.everrest.educata.dev/auth/sign_up'

  login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
    .set('email', email)
    .set('password', password)
    return this.http.get(this.apiUrl, { params })
  }

  getAll(url : string) {
    let token = localStorage.getItem('access')
    return this.http.get(url, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    })
  }

  postObject(url : string, obj : any) {
    let token = localStorage.getItem('access')
    return(this.http.post(url, obj, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }))
  }

  deleteObject(url: string, obj?: any) {
    const token = localStorage.getItem('access');
    return this.http.request('delete', url, {
      body: obj,
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }
  
  patch(url : string, obj: any){

  let token = localStorage.getItem('access')
  
  return this.http.patch(url,obj, {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  })
}
  

}
