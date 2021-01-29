import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
    {
        providedIn:'root'
    }
)
export class LoginService {
    


    // Publisher/Subscriber pattern

    // SUbject : Newspaper,Blog,UserName
    //Observable : NewsPaper Agency

    //Subscribers:  Houses , HeaderCOmponent


    //USerName (Newspaper,Blog)
    unameSubject: Subject<string>=new Subject<string>()
// Observable(e.g:NewsPaper Agency)
    unameobservable= this.unameSubject.asObservable()
    username:string
    constructor() { }

    setUserName(uname:string){
        this.username =uname
        //At this point we should notify HeaderCOmp that new value has arrived
        this.unameSubject.next(uname)
    }

    getUserName(){
        return this.username
    }

}