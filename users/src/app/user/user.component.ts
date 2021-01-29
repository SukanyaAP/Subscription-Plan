import { Component, OnInit } from '@angular/core';
import { UsersService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  template:
  `
   <div>
  <h2>Project User Details</h2>
  <app-userdetails></app-userdetails></div>
  Search User:<input type="text"  #search />
  <button (click)="SearchUser(search.value)" >Search</button><br><br>
   <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Photo</th>
                    <th colspan="4">Actions</th>
                                        
                </tr>
                <tr *ngFor="let user of Users">
                   <td>{{user.UserId}}</td>
                   <td>{{user.UserName}}</td>
                   <td>{{user.EMailAddress}}</td>
                   <td><img src="{{user.Photo}}" height="100px" width="100px"/></td>
                   <td><button class= "btn btn-primary" [disabled]="!IsAdmin" (click)="showDetails(user)">Show Details</button></td>
                   <td><button *ngIf="IsAdmin">Delete</button></td>
                   <td><button *ngIf="IsAdmin">Edit</button></td>
                   <td><app-addForProject [selectedUser]="user"></app-addForProject></td>
               
                </tr>
                </table>
                <br>`,
                styles: [`img{
                  width: auto;
                  height: 100px;
                }   
                  table{
                  display: 'inline-block';
                  float: left;
                  margin-left: 50px;
                  border: 1px solid black;
                  border-collapse: collapse;
                }
                  table caption{
                  text-align: center;
                }       
                  th{
                    border-bottom: 1px solid #ddd;
                  text-align: center;
                  background-color: peachpuff;
                  fontWeight: bold;
                }
               tr,td
                { padding: 10px;
                  border-bottom: 2px solid #ddd;
                }
                  div{

                  float: right;
                  width: 300px;
                  margin-top: 150px;
                }
                #myHeader{
                  position:absolute;
                  top:0;
                  right:0;
                }  `],
                providers:[UsersService]    //Register service
               })
export class UserComponent {
   Users:User[]=[]
   IsAdmin:boolean= true

   // call service method getDetails() to fetch data to current object of user
  constructor(userservice:UsersService)    //Inject Service through ctor
   {
    this.Users=userservice.getDetails()
   }
   //code for show details button
   showDetails(usr:User){
    alert("Details of user are !!!\n"+"   User Id: "+usr.UserId+ "\n User Name: "+usr.UserName+" \nMail ID: "+usr.EMailAddress)
    }

    SearchUser(value:string){
      // alert("Search Products with criteria...."+value)
      var searchUser:any[]=[]
      for(var i in this.Users){
          if(this.Users[i].UserName.toLowerCase().
          startsWith(value.toLowerCase())){
          searchUser.push(this.Users[i].UserName)
          alert("ID: "+this.Users[i].UserId+"\nName: "+this.Users[i].UserName+"\nEmail: "+this.Users[i].EMailAddress)
          console.log(searchUser)
          }
      }
      
    }

      


  

}
