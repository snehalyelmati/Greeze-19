import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-manage-hospitals',
  templateUrl: './manage-hospitals.component.html',
  styleUrls: ['./manage-hospitals.component.css']
})
export class ManageHospitalsComponent implements OnInit {
  applications: { username: string, uid: string, hospitalName: string }[] = [
    {username: 'Patient 1', hospitalName: 'Apollo', uid: 'ajlkjFKDHsflDKJDKFJ9DF08f'},
    {username: 'Patient 2', hospitalName: 'Kameneni', uid: 'cjlkjFKDHsflDKJDKFJ9DF08g'},
    {username: 'Patient 3', hospitalName: 'Sunshine', uid: 'sjlkjFKDHsflDKJDKFJ9DF08e'},
    {username: 'Patient 4', hospitalName: 'Kameneni', uid: 'gjlkjFKDHsflDKJDKFJ9DF08a'},
    {username: 'Patient 5', hospitalName: 'Apollo', uid: 'djlkjFKDHsflDKJDKFJ9DF08d'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleApplication(status: boolean) {
    // post request to API
  }
}
