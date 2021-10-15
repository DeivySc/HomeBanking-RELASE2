import { Component, OnInit } from '@angular/core';
import {DialogWarningComponent} from "./dialog-warning/dialog-warning.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-desact-token',
  templateUrl: './desact-token.component.html',
  styleUrls: ['./desact-token.component.scss']
})
export class DesactTokenComponent implements OnInit {

  warning = true
  next1 = false
  next2 = false


  constructor(public dialog: MatDialog) { }

  clickNext1(){
    this.warning = false
    this.next1 = false
    this.next2 = true
  }

  clickNext2(){

  }

  clickDesToken(){
    if(this.warning){
      const dialogRef = this.dialog.open(DialogWarningComponent, {
        width: '321px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`)
        this.warning = false;
        this.next1 = true;
        this.next2 = false;
      })
    }
  }

  ngOnInit(): void {
  }

}