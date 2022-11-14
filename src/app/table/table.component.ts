import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  data: any;
  colDefs: any;
  ngOnInit(): void {
  
  this.colDefs = [
    { label: "Company", field: "company" },
    { label: "Contact", field: "contact" },
    { label: "Country", field: "country" }
    ];
    // datasource
    this.data = [
    {
      company: "Alfreds Futterkiste",
      contact: "Maria Anders", 
      country: "Germany"
    },
    {
      company: "Centro comercial Moctezuma",
      contact: "Francisco Chang",
      country: "Mexico"
    }
    ];
  }
}
