import { User } from './user';
import { Injectable } from '@angular/core';
@Injectable()


export class UsersService {
    Users:User[]=[]
    
    constructor() {
    this.Users.push(new User(1, "Sukanya", "sap@gmail.com","./assets/images.png"));
    this.Users.push(new User(2,"Rasika","Ras@gmail.com","./assets/images.png"));
    this.Users.push(new User(3,"Amruta","Amr@gmail.com","./assets/images.png"));

     }

     getDetails(): User[]{
        return this.Users
  }
 


}