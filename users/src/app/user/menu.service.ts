import { Injectable }
from '@angular/core';



@Injectable(

{
providedIn:'root'
}

)

export class MenuService {

Menus:string[]=["Users","Project Users","Login","Register","Pips","HttpCalls","Logout"]

getMenus()
{
return this.Menus
}

}

