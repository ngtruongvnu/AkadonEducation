import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TutorSchedule } from '../models/tutor-schedule.model';

const urlApi = 'http://localhost:3000/dataSource';

@Injectable({
  providedIn: 'root',
})

export class TutorScheduleService {
  constructor(private http: HttpClient) {}

  getSchedule(): Observable<TutorSchedule[]> {
    return this.http.get<TutorSchedule[]>(urlApi);
  }
}
