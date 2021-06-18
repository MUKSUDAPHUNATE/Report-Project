import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportcovidService {

  constructor(private http :HttpClient )
  {

  }
  getdata()
  {
    return this.http.get<any>('https://covid19.th-stat.com/json/covid19v2/getTodayCases.json');

    }
  }

