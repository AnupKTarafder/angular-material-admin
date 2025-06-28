import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { colors, routes } from '@app/consts';

@Component({
  selector: 'app-vector-map-page',
  templateUrl: './vector-map-page.component.html',
  styleUrls: ['./vector-map-page.component.scss'],
  standalone: false,
})
export class VectorMapPageComponent implements AfterViewInit {
  @ViewChild('chartRoot', { static: false }) public mapChart: ElementRef<HTMLElement>;
  public colors: typeof colors = colors;
  public routes: typeof routes = routes;

  public ngAfterViewInit() {
    // Create root element
    const root = am5.Root.new(this.mapChart.nativeElement);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create the map chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoMercator(),
      })
    );

    // Create main polygon series for countries
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
      })
    );

    // Configure polygon series
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      fillOpacity: 0.2,
      fill: am5.color(colors.BLUE),
      strokeWidth: 0.5,
      stroke: am5.color('#fff'),
    });

    // Create hover state
    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: am5.color(colors.BLUE),
      fillOpacity: 1,
    });

    // Create point series for cities
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    // Configure point series
    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(colors.BLUE),
          stroke: am5.color('#fff'),
          strokeWidth: 2,
          tooltipText: '{title}',
        }),
      });
    });

    // Set point series data
    pointSeries.data.setAll([
      {
        title: 'Brussels',
        latitude: 50.8371,
        longitude: 4.3676,
      },
      {
        title: 'Copenhagen',
        latitude: 55.6763,
        longitude: 12.5681,
      },
      {
        title: 'Paris',
        latitude: 48.8567,
        longitude: 2.351,
      },
      {
        title: 'Reykjavik',
        latitude: 64.1353,
        longitude: -21.8952,
      },
      {
        title: 'Moscow',
        latitude: 55.7558,
        longitude: 37.6176,
      },
      {
        title: 'Madrid',
        latitude: 40.4167,
        longitude: -3.7033,
      },
      {
        title: 'London',
        latitude: 51.5002,
        longitude: -0.1262,
      },
      {
        title: 'Peking',
        latitude: 39.9056,
        longitude: 116.3958,
      },
      {
        title: 'New Delhi',
        latitude: 28.6353,
        longitude: 77.225,
      },
      {
        title: 'Tokyo',
        latitude: 35.6785,
        longitude: 139.6823,
      },
      {
        title: 'Ankara',
        latitude: 39.9439,
        longitude: 32.856,
      },
      {
        title: 'Buenos Aires',
        latitude: -34.6118,
        longitude: -58.4173,
      },
      {
        title: 'Brasilia',
        latitude: -15.7801,
        longitude: -47.9292,
      },
      {
        title: 'Ottawa',
        latitude: 45.4235,
        longitude: -75.6979,
      },
      {
        title: 'Washington',
        latitude: 38.8921,
        longitude: -77.0241,
      },
      {
        title: 'Kinshasa',
        latitude: -4.3369,
        longitude: 15.3271,
      },
      {
        title: 'Cairo',
        latitude: 30.0571,
        longitude: 31.2272,
      },
      {
        title: 'Pretoria',
        latitude: -25.7463,
        longitude: 28.1876,
      },
    ]);

    // Make stuff animate on load
    chart.appear(1000, 100);
  }
}
