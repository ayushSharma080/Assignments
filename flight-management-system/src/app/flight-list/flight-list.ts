import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-list.html',
  styleUrl: './flight-list.css'
})
export class FlightListComponent {

  flights = [
    {
      flightNumber: 'SW101',
      source: 'New York',
      destination: 'London',
      departureTime: '10:00 AM',
      status: 'On Time'
    },
    {
      flightNumber: 'SW202',
      source: 'Paris',
      destination: 'Dubai',
      departureTime: '1:30 PM',
      status: 'Delayed'
    },
    {
      flightNumber: 'SW303',
      source: 'Tokyo',
      destination: 'Sydney',
      departureTime: '9:00 PM',
      status: 'Cancelled'
    }
  ];
}
