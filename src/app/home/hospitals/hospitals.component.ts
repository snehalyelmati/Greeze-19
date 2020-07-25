import {Component, OnInit} from '@angular/core';
import {Hospital} from './hospital.model';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
  hospitals: Hospital[] = [
    new Hospital(
      'Apollo', 'Hyderabad, Telangana.', [11111, 22222],
      80, 250, 'asdjfkjkdasl', 1, 2,
      123222, 'Moderator', 9696123123
    ),
    new Hospital('Kameneni', 'Hyderabad, Telangana.', [11111],
      8, 210, 'asdjfkjkdasl', 2, 1,
      123222, 'None', 9696123123
    ),
    new Hospital('Sunshine', 'Hyderabad, Telangana.', [11111, 22222, 33333],
      20, 150, 'adjfkjkdasl', 3, 3,
      123222, 'None', 9696123123
    )
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
