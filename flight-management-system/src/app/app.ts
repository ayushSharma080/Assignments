import { Component } from '@angular/core';
import { FlightHeaderComponent } from './flight-header/flight-header';
import { FlightListComponent } from './flight-list/flight-list';
import { FlightFooterComponent } from './flight-footer/flight-footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FlightHeaderComponent,
    FlightListComponent,
    FlightFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Flight Management System';
}
