import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterData } from '../models/register.interface';
import { ResponseData } from '../models/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

    private registerUrl = 'http://localhost:8888/auth/register';

  constructor(private http: HttpClient) {
  }

  Register(form:RegisterData): Observable<ResponseData> {
    return this.http.post<ResponseData>(this.registerUrl, form);
  }
}
