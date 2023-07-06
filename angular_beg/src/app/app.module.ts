import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    EditUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,CommonModule, BrowserAnimationsModule,MatAutocompleteModule,MatInputModule,
    MatExpansionModule,MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
