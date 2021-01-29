import { Component,
    OnInit, Input }
    from '@angular/core';
import { User } from './user';
import { ProjectService } from './project.service';
   
    @Component({
        selector: 'app-addForProject',
    template: `<button (click)="AddUserForProject()">Add for Project </button>`,
        })
    
    export class AddForProjectComponent {
        @Input()
    selectedUser:User
    
    constructor(private projectservice:ProjectService) { }
          
    AddUserForProject()
        {
       // alert('User added for project is:'+this.selectedUser.UserName)
        this.projectservice.AddUserForProject(this.selectedUser)
        }
    
    }