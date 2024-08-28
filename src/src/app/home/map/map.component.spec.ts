import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeService } from '../services/home.service';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let homeService: HomeService;
  let apiUrl = "https://dev.chronicle.rip/api/v1/ms/plots-in-viewport?bounds=115.19192682579163,-8.635945622432802,115.19218364730479,-8.635783199701216";

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
