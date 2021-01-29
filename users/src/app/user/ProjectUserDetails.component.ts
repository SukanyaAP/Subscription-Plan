
import { Component,
    OnInit } from
    '@angular/core';
  
import { User } from './user';
import { ProjectService } from './project.service';
    
    @Component({
    
    selector: 'app-userdetails',
    
    template:` <table>
    <tr>
        <th>ID</th> 
        <th>Name</th> 
    </tr>
    <tr *ngFor="let user of ProjectUsers;let i=index">
            <td>{{user.UserId}}</td>
            <td>{{user.UserName}}</td>
            <td> <button (click)=remove(i)>Remove</button></td>
    </tr>
    </table>`,
        })
    
    export class
    ProjectUserDetailsComponent 
 { 
    ProjectUsers:User[]=[]
    constructor(private projectservice:ProjectService)
        {
        this.ProjectUsers=projectservice.GetProjectUsers()
        }
        remove(index){
            this.projectservice.removeUser(index)
        }
    
    }
