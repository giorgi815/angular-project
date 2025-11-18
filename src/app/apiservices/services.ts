import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginRequest } from '../signin/signin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Services {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.everrest.educata.dev/auth/sign_up'

  login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
    .set('email', email)
    .set('password', password)
    return this.http.get(this.apiUrl, { params })
  }

  search<T = any>(filters : any): Observable<T>{
  let params = new HttpParams

  Object.keys(filters).forEach(key => {
    if(
      filters[key] !== null && 
      filters[key] !== undefined && 
      filters[key] !== ''
    ){
      params = params.set(key,filters[key])
    }
  })

  return this.http.get<T>('https://api.everrest.educata.dev/shop/products/search', {params})
}

  getAll(url : string) {
    return this.http.get(url)
  }

  postObject(url : string, obj : any) {
    return(this.http.post(url, obj))
  }

  deleteObject(url : string) {
    return this.http.delete(url)
  }

}
