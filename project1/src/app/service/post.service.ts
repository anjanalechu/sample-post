import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviornment/enviornment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = environment.baseUrl
  jsonurl:string="assets/post.json"
  constructor(private http: HttpClient) { }
  getallPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`)
  }

  // getjson(): Observable<any> {
  //   return this.http.get(`${this.jsonurl}`);
  // }

}
