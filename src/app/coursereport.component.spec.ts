import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoursereportComponent } from './coursereport.component';
import { ApiclientService } from './apiclient.service';
import { of } from 'rxjs';

describe('CoursereportComponent', () => {
  let component: CoursereportComponent;
  let fixture: ComponentFixture<CoursereportComponent>;
  let service: ApiclientService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursereportComponent ],
      imports: [HttpClientTestingModule],
      providers: [ApiclientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursereportComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ApiclientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.loading').textContent).toContain('Loading');
  });

  it('should render the report after the API loading', fakeAsync(_ => {
    spyOn(service, "getCourseResult").and.returnValue(of(new Map([[2015, ["Course Name"]]])));
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.year').textContent).toContain('2015');
  }));

  it('should show the course list', fakeAsync(_ => {
    spyOn(service, "getCourseResult").and.returnValue(of(new Map([[2015, ["Financial Reporting"]]])));
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.subject').textContent).toContain('Financial Reporting');
  }));

  it('should show the course list', fakeAsync(_ => {
    spyOn(service, "getCourseResult").and.returnValue(of(new Map([[2016, ["Advanced Taxation"]]])));
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.subject').textContent).toContain('Advanced Taxation');
  }));
});
