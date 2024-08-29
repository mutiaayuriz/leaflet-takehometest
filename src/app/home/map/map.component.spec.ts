import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeService } from '../services/home.service';
import { MapComponent } from './map.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MapComponent],
    }).compileComponents();
  })

  it ('should create the app', () => {
    const fixture = TestBed.createComponent(MapComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })

});
