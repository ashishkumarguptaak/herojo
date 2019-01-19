import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'about', component: AboutComponent },
    {path: 'description', component: DescriptionComponent },
    {path: 'profile', component: ProfileComponent },
    {path: '', component: HomeComponent }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
