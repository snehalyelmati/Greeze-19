import {Component, Input, OnInit} from '@angular/core';
import {Hospital} from '../hospital.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  @Input() hospital: Hospital;
  @Input() index: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onBook() {
    alert('Your request has been sent, please wait for the hospital moderator to contact you.');
  }
}
