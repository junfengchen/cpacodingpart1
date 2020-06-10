import { TestBed,fakeAsync,tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiclientService } from './apiclient.service';

describe('ApiclientService', () => {
  let service: ApiclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('http post should get valid response without any param', fakeAsync(_ => {
    service.getCourseResult().subscribe(res => {
      expect(res).toBeInstanceOf(Map)
      expect(res.size).toEqual(5);
    });
  }));

  it('http post should return valid data', fakeAsync(_ => {
    service.getCourseResult().subscribe(res => {
      expect(res).toBeInstanceOf(Map)
      expect(res.has(2015)).toBeTrue();
      expect(res.get(2015)).toEqual(["Advanced Audit and Assurance", "Financial Risk Management"]);
    });
  }));
});
