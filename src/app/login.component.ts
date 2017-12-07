import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { DialogService } from "ng2-bootstrap-modal";
import { ErrorMsgComponent } from './error-msg.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy{
  username: string = "demo";
  passcode: string = "demo";

  constructor(private router: Router, private dialogService: DialogService){

  }

  ngOnInit(){
    document.body.style.backgroundImage = "url(./assets/background.jpg)";
    document.body.style.backgroundSize = "cover 100%";
    document.body.style.backgroundRepeat = "no-repeat";
  }

  login(){
    if(this.username === "demo" && this.passcode === "demo"){
        this.router.navigateByUrl('/listings')
    } else {
      this.dialogService.addDialog(ErrorMsgComponent, {
        title:'Error', 
        message:'Invalid username or password!'})
    }
  }

  ngOnDestroy(){
      document.body.style.backgroundImage = "none";
  }

}
