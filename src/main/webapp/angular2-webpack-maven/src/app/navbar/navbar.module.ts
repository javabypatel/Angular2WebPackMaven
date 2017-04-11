import {NgModule}       from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar.component';

//BrowserModule import is used for using ngFor, ngIf etc features
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { TranslateModule }      from 'ng2-translate';

@NgModule({
    //put all your modules here
    //The imports key in the context of an @NgModule defines additional modules 
    //that will be imported into the current module
    imports: [ 
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    
    // put all your components / directives / pipes here
    declarations:[
        NavBarComponent,
    ],

    // put all your services here
    providers: [
    ],
    exports: [NavBarComponent]
})

export class NavBarModule{}