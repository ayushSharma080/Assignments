import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-header',
  standalone: true,
  templateUrl: './flight-header.html',
  styleUrl: './flight-header.css'
})
export class FlightHeaderComponent {
  airlineName = 'SkyWays Airlines';
  tagline = 'Fly Beyond Limits';
}
