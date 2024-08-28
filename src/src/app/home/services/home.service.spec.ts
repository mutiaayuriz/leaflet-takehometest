import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('HomeService', () => {
  let service: HomeService;
  let httpClientService: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(HomeService);
    httpClientService = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(httpClientService);
  });

  // it('should return data', (done: DoneFn) => {
   
  //   service.getData().subscribe({
  //     next: (data) => {if (data) return data},
  //     error: (error) => {
  //       done();
  //     },
  //   });
  // });
  
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});



function asyncError(errorResponse: HttpErrorResponse): import("rxjs").Observable<unknown> {
  throw new Error('Function not implemented.');
}
// describe('HomeService get data', () => {

//   beforeEach(() => TestBed.configureTestingModule({
//     providers: [HomeService]
//   }));

//    it('should be created', () => {
//     const service: HomeService = TestBed.get(HomeService);
//     expect(service).toBeTruthy();
//    });

//    it('should have getData function', () => {
//     const service: HomeService = TestBed.get(HomeService);
//     expect(service.getData).toBeTruthy();
//    });

// });
