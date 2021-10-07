import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-act-token',
  templateUrl: './act-token.component.html',
  styleUrls: ['./act-token.component.scss']
})
export class ActTokenComponent implements OnInit {

  groupForm1!: FormGroup;
  checked = new FormControl('', Validators.required);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.groupForm1 = new FormGroup({
      check: this.checked,
    })
  }

  public redirectConfig(){
    this.router.navigateByUrl('/home/configuracion')
  }

}
