import { Component,
    OnInit } from
    '@angular/core';
    
    import { MenuService }
    from './menu.service';
    
    
    
    @Component({
    
    selector: 'menus',
    template: ` <nav class="navbar navbar-inverse">
   
    <ul class="nav navbar-nav">
        <li *ngFor = "let item of menus">
        <a routerLink="{{item |lowercase}}">{{item}}</a>


    
    </li>
    </ul>
        </nav>`,
    
    styles: ['li { color:red; }']
    
    })
    
    export class MenuComponent {
    
    menus:string[]
    
    constructor(menuservice:MenuService) 
    {
    this.menus =
    menuservice.getMenus()
    
          }
    }
    