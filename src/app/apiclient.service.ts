import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiclientService {

  constructor(private http: HttpClient) { }

  getCourseResult = () => {
    return this.http.get('/api/results').pipe(
        map( response => {
          return this.convert(response);
        }),
        catchError( error => {
          throw new Error(error);
        })
    );
  }

  convert = data => {
    data.sort((a, b) => a.subject.localeCompare(b.subject));
    const newList = new Map();
    data.forEach(c =>
      c.results.filter(r => r.grade === 'PASS').forEach(r =>
          newList.has(r.year) ?
          newList.set(r.year, [...newList.get(r.year), c.subject]) :
          newList.set(r.year, [c.subject])
      )
    );
    return newList;
  }
}
