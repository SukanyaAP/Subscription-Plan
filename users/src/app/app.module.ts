import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProjectService } from './user/project.service';
import { AddForProjectComponent } from './user/addForProject.component';
import { ProjectUserDetailsComponent } from './user/ProjectUserDetails.component';
import { MenuComponent } from './user/menu.component';
import { NotFoundComponent } from './user/notfound.component';
import { LoginComponent } from './user/login.component';
import { HeaderComponent } from './user/Header.component';
import { SignupComponent } from './user/signupform.component';
import { PipeComponent } from './user/pipe.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './user/photo.component';
var routes= [

  {
  
  path:'',
  component:MenuComponent
  },

  {
    path:'users',
   component:UserComponent
    },
    {
      path:'project users',
     component:ProjectUserDetailsComponent
      },
  {
    path:'login',  ////http://localhost:4200/login
    component:LoginComponent
  },
  {
    path:'register',
   component:SignupComponent
    },
    {
      path:'pipes',
     component:PipeComponent
      },
      {
        path:'Photos',
       component:PhotosComponent
        },
 {
  path:'**',
 component:NotFoundComponent
  }
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,AddForProjectComponent,ProjectUserDetailsComponent,MenuComponent,LoginComponent,NotFoundComponent,
    HeaderComponent,SignupComponent,PipeComponent,PhotosComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule ,HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
