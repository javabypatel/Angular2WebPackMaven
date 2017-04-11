import { NgModule }       from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { Globals }              from '../shared/globals';
import { TestService }       from './test.service';
import { TestComponent } from './test.component';
import { AnotherTestComponent } from './another.test.component';

import { TestRoutes } from './test.routes';

@NgModule({
    //put all your modules here
    //The imports key in the context of an @NgModule defines additional modules 
    //that will be imported into the current module

    imports: [ 
        CommonModule,
        TestRoutes,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule
    ],

    // put all your components / directives / pipes here
    declarations:[
        TestComponent,
        AnotherTestComponent,  
    ],

    // put all your services here
    providers: [ 
        TestService,
        Globals
    ],
})

export class TestModule{}