import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public errorMessage: string = '';
  public statusData: boolean = false;

  constructor(private apiService: HomeService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (data) => {
        if (data) {
          this.initMap(data);
          this.statusData = true;
        }
      },
      error: (error) => {
        this.errorMessage = error?.errorMessage || 'Failed fetch data maps';
      },
    });
  }

  private initMap(data: any) {
    const map = L.map('map').setView(
      [115.19218364730479, -8.635783199701216],
      13
    );

    //osm layer
    const osm = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    osm.addTo(map);

    const polystyle = () => {
      return {
        fillColor: '#afd6de',
        weight: 2,
        opacity: 0.5,
        color: '#378af9', //Outline color
        fillOpacity: 0.7,
      };
    };

    if (data) {
      const geoJsonLayer = L.geoJson(data, { style: polystyle }).addTo(map);
      geoJsonLayer.eachLayer(function (layer: any) {
        if (layer.feature.properties?.persons.length > 0) {
          layer.bindPopup(
            '<h3><strong>' +
            layer.feature.properties?.cemetery_name +
            ' ' +
            layer.feature.properties?.plot_no +
            '</strong></h3>' +
            '<p><strong>Section: </strong>' +
            layer.feature.properties?.section +
            '</p>' +
            '<p><strong>Status: </strong>' +
            layer.feature.properties?.status +
            '</p>' +
            '<p><strong>Data Person</strong></p>' +
            '<hr/>' +
            layer.feature.properties?.persons
              .map(
                (value: any) =>
                  '<p><strong>' +
                  'Name' +
                  '</strong>: ' +
                  value.first_name +
                  ' ' +
                  value.last_name +
                  '</p>' +
                  '<p><strong>' +
                  'Age' +
                  '</strong>: ' +
                  value.age +
                  '</p>' +
                  '<p><strong>' +
                  'Date of Birth' +
                  '</strong>: ' +
                  new Date(value.date_of_birth).toLocaleDateString('en-US') +
                  '</p>' +
                  '<hr/>'
              )
              .join('')
          );
        } else {
          layer.bindPopup(
            '<h3><strong>' +
            layer.feature.properties?.cemetery_name +
            ' ' +
            layer.feature.properties?.plot_no +
            '</strong></h3>' +
            '<p><strong>section: </strong>' +
            layer.feature.properties?.section +
            '</p>' +
            '<p><strong>status: </strong>' +
            layer.feature.properties?.status +
            '</p>'
          );
        }
      });
      map.fitBounds(geoJsonLayer.getBounds(), { padding: [20, 20] });
    }
  }
}
