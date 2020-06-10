import { async, ComponentFixture, TestBed, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoursereportComponent } from './coursereport.component';

describe('CoursereportComponent', () => {
  let component: CoursereportComponent;
  let fixture: ComponentFixture<CoursereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursereportComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursereportComponent);
    component = fixture.componentInstance;
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
});
