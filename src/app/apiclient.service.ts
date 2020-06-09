import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  constructor(private http: HttpClient) { }

  getCourseResult() {
    return this.http.get('/api/results');
  }
}
