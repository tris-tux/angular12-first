import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any = [
    {
      name: 'Tris',
      address: 'Address 1',
      approved: true
    },
    {
      name: 'Feb',
      address: 'Address 2',
      approved: true
    },
    {
      name: 'Anto',
      address: 'Address 3',
      approved: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
