import { Component } from '@angular/core';
import { ApiclientService } from './apiclient.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Application to show Course Report';
  passedCourses: Map<number, Array<string>>;
  hasError:boolean = false;

  constructor(private _http: ApiclientService) {}

  ngOnInit() {
    this._http.getCourseResult().subscribe(data=>{
      this.hasError = false;
      //console.log(JSON.stringify(data));
      this.passedCourses = this.convert(data);
      //console.log(this.passedCourses);
    }, error=>{
      this.hasError = true;
    })
  }

  convert = data => {
    data.sort((a, b)=>a.subject.localeCompare(b.subject))
    let newList = new Map()
    data.forEach(c=>{
      c.results.filter(r=>r.grade==="PASS").forEach(r=>{
        newList.has(r.year) ? newList.set(r.year,[...newList.get(r.year), c.subject]) : newList.set(r.year, [c.subject])
      })
    })
    return newList
  }
}
