import { Injectable }
from '@angular/core';
import { User } from './user';




@Injectable(
{
    providedIn:'root'
})

export class ProjectService {
ProjectUsers:User[]=[]
constructor() { }
AddUserForProject(usr:User)
{
this.ProjectUsers.push(usr)
console.log(this.ProjectUsers)
}
GetProjectUsers()
{
return this.ProjectUsers
}
removeUser(index){
    this.ProjectUsers.splice(index,1)
}
}



