import {Component, OnInit} from '@angular/core';
import {Hospital} from './hospital.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
  // hospitals: Hospital[] = [
  //   new Hospital(
  //     'Apollo', 'Hyderabad, Telangana.', [11111, 22222],
  //     80, 250, 'asdjfkjkdasl', 1, 2,
  //     123222, 'Moderator', 9696123123
  //   ),
  //   new Hospital('Kameneni', 'Hyderabad, Telangana.', [11111],
  //     8, 210, 'asdjfkjkdasl', 2, 1,
  //     123222, 'None', 9696123123
  //   ),
  //   new Hospital('Sunshine', 'Hyderabad, Telangana.', [11111, 22222, 33333],
  //     20, 150, 'adjfkjkdasl', 3, 3,
  //     123222, 'None', 9696123123
  //   )
  // ];
  hospitals: Hospital[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://greeze-de2bd.el.r.appspot.com/api/v1/hospitals').pipe(
      tap((hospitals: Hospital[]) => {
        this.hospitals = hospitals;
      })
    ).subscribe(() => {
      console.log(this.hospitals);
    });
  }

  async onRefresh() {
    console.log('In hospitals component.');

    this.http.get('https://greeze-de2bd.el.r.appspot.com/api/v1/hospitals').pipe(
      tap((hospitals: Hospital[]) => {
        this.hospitals = hospitals;
      })
    ).subscribe(() => {
      console.log(this.hospitals);
    });
  }
}
