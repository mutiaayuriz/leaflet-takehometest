import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HomeService', () => {
  let service: HomeService;
  let testingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HomeService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be create', () => {
    expect(service).toBeTruthy();
  });
});