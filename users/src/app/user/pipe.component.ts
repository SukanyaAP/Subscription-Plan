import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector',
    template: `

       <!-- {{ProductName | reverse | uppercase}} <br> -->

    Product Name :{{ProductName | lowercase}} <br>
    Product Name :{{ProductName | uppercase}} <br>
    Product Date : {{ProductDate | date}} <br>

    Product Date : {{ProductDate | date : 'short' }} <br>
    Product Date : {{ProductDate | date : 'medium' }} <br>
    Product Date : {{ProductDate | date : 'MMM/dd/yyyy' }} <br>


    Product PRice : {{ProductPrice | currency}} <br>

    Product PRice : {{ProductPrice | currency : 'INR'}} <br>
    Product PRice : {{ProductPrice | currency : 'EUR' }} <br>
    
    `
})
export class PipeComponent implements OnInit {

    ProductName:string ="Samsung"
    ProductPrice:number =12345
    ProductDate:Date = new Date()

    constructor() { }

    ngOnInit() { 

    }

}