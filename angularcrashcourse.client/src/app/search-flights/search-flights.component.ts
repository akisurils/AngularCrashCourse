import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  standalone: false,
  
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})

export class SearchFlightsComponent {

  searchResult: FlightRm[] = [
    {
      airline: "American Airline",
      remainingSeats: 500,
      departure: {time: Date.now().toString(), place: "Los Angeles"},
      arrival: {time: Date.now().toString(), place: "Istanbul"},
      price: "350" 
    },
    {
      airline: "Deutsche BA",
      remainingSeats: 60,
      departure: {time: Date.now().toString(), place: "Munchen"},
      arrival: {time: Date.now().toString(), place: "London"},
      price: "600" 
    },
    {
      airline: "British Airways",
      remainingSeats: 60,
      departure: {time: Date.now().toString(), place: "Manchester"},
      arrival: {time: Date.now().toString(), place: "Paris"},
      price: "600" 
    },
  ];
};

export interface FlightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingSeats: number;
}

export interface TimePlaceRm {
  place: string;
  time: string;
}
