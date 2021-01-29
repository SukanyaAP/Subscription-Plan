import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-header',
    template:  `Welcome {{UserName}} `
})
export class HeaderComponent implements OnInit {

    UserName:string
    constructor(loginservice:LoginService) { 
         console.log("Contr of HeaderCOmp is called.....")
       // this.UserName = loginservice.getUserName() //returning blank value
        // SUbscribe to suername observable

         loginservice.unameobservable.subscribe(res=>{
            console.log("UserName is changed....")
            this.UserName =res
         })

    }

    ngOnInit() { 

    }

}