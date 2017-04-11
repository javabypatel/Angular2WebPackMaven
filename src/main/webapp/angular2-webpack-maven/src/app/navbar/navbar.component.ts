import { Component, OnInit } from "@angular/core";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Globals } from '../shared/globals';

@Component({ 
      selector: 'navbar',
      template: require('./navbar.component.html'),
})

export class NavBarComponent implements OnInit {

    constructor(
          private _router : Router,
          private _globals: Globals){
    }
	
	ngOnInit() {
	}
    
    logout(){
    	//Add code for logout
    }

}