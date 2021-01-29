import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    name:string ="admin"
    password:string ="admin"
    constructor(private loginservice:LoginService) { }

    ngOnInit() { 

    }

    login(){
     nhfhgfhgfhg
     yu6i78io8o89o8
        this.loginservice.setUserName(this.name)
    // this.name ="Visitor"

    }

}