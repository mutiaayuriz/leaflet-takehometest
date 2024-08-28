import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('HomeService', () => {
  let service: HomeService;
  let httpClientService: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClientService = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HomeService(httpClientService);
  });

});

