import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  name!: number;

  setValue() {
    this.name = 1;
  }

  delete() {}
  clear() {}

  buttons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() { }

  ngOnInit(): void {
  }

}
