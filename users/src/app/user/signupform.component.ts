import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    
})
export class SignupComponent implements OnInit {

    Name:string ="Sachin"
    Address:string ="HJ"
    Telephone:1234567890
    Email= "sachin@gmail.com"


    constructor() { }

    ngOnInit() { 

    }

}