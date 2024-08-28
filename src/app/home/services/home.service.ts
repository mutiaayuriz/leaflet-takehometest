import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url: string = "https://dev.chronicle.rip/api/v1/ms/plots-in-viewport?bounds=115.19192682579163,-8.635945622432802,115.19218364730479,-8.635783199701216"
  constructor( private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.url}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
