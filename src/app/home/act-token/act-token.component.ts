import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-act-token',
  templateUrl: './act-token.component.html',
  styleUrls: ['./act-token.component.scss']
})
export class ActTokenComponent implements OnInit {

  checked!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
