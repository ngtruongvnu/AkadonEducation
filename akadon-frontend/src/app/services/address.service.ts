import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Address from 'src/../address.json';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAllCities() {
    return Address.City;
  }

  getCityById(id: string) {
    let city: City = Address.City.filter(city => city.id === id)[0]; 
    return city;
  }
}
