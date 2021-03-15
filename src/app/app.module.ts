import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClassesComponent } from './create-classes/create-classes.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateClassesComponent,
    ClassesListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot([
          { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
          { path: 'create-classes', component: CreateClassesComponent },
          { path: 'classes-list', component: ClassesListComponent },
          { path: 'home-component', component: HomeComponent },
      ]),
      ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
