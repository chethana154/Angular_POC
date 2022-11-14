import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  btnConfig: any
  ngOnInit(): void {
    this.btnConfig = [
      { label: "Button 1", color: "primary" },
      { label: "Button 2", color: "accent", icon: "more_vert" },
      { label: "Button 3", color: "primary", disabled: true }
    ];
  }

}
