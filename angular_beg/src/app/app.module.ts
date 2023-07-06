import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TestComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,CommonModule, BrowserAnimationsModule,MatAutocompleteModule,MatInputModule,
    MatExpansionModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
