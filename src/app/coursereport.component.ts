import { Component, OnInit } from '@angular/core';
import { ApiclientService } from './apiclient.service';

@Component({
  selector: 'app-coursereport',
  templateUrl: './coursereport.component.html',
  styleUrls: ['./coursereport.component.scss']
})
export class CoursereportComponent implements OnInit {

  courseList: Map<number, Array<string>>;
  hasError = false;
  loading = false;

  constructor(private http: ApiclientService) {}

  ngOnInit() {
    this.loading = true;
    this.http.getCourseResult().subscribe(data => {
      this.courseList = data;
      this.hasError = false;
      this.loading = false;
    }, error => {
      this.hasError = true;
      this.loading = false;
    });
  }
}
