import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnDestroy{
  username: string = "demo";
  passcode: string = "demo";

  constructor(private router: Router){
    document.body.style.backgroundImage = "url(./assets/background.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  }


  login(){
    if(this.username === "demo" && this.passcode === "demo"){
        this.router.navigateByUrl('/listings')
    } else {
        alert("Invaild username or password!");
    }
  }

  ngOnDestroy(){
      document.body.style.backgroundImage = "none";
  }

}
