import {Component, Input, OnInit} from '@angular/core';
import {Hospital} from '../hospital.model';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  @Input() hospital: Hospital;

  constructor() { }

  ngOnInit(): void {
  }

}
