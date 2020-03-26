import { Injectable } from "@angular/core";
import { SharedModel } from '../shared/shared.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http:HttpClient) {}

  dataTable(): Observable<SharedModel[]> { 
    return this.http.get<SharedModel[]>('https://coronavirus-19-api.herokuapp.com/countries').pipe(
      map(res => res),
      catchError(this.handleError)
    )
  }

  bigChart() {
    return [
      {
        name: "Asia",
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      },
      {
        name: "Africa",
        data: [106, 107, 111, 133, 221, 767, 1766]
      },
      {
        name: "Europe",
        data: [163, 203, 276, 408, 547, 729, 628]
      },
      {
        name: "America",
        data: [18, 31, 54, 156, 339, 818, 1201]
      },
      {
        name: "Oceania",
        data: [18, 31, 54, 156, 339, 818, 1201]
      }
    ];
  }

  cards() {
    return [71, 78, 39,66];
  }

  pieChart() {
    return  [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Sogou Explorer',
      y: 1.64
  }, {
      name: 'Opera',
      y: 1.6
  }, {
      name: 'QQ',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }]
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
