import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  employeeList: any[];

  constructor(){
    
  }
  
  ngOnInit(){
    this.employeeList = [
      {
        id: '043',
        name: 'Ivanne Chester',
        age: 28,
        address: 'Quezon City, South Triangle'
      },
      {
        id: '032',
        name: 'Lester Villacastin',
        age: 25,
        address: 'North Caloocan City'
      },
      {
        id: '304',
        name: 'Juan Ponce Enrile',
        age: 150,
        address: 'Manila, Philippines'
      },
      {
        id: '023',
        name: 'Catherine Cordova',
        age: 23,
        address: 'San Jose del monte Bulacan'
      },
      {
        id: '014',
        name: 'DeJomar Asis',
        age: 30,
        address: 'Bagong Silang Caloocan City'
      }
    ]
  }

 


}
