import {Component, OnInit}  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import { Globals } from './shared/globals';

@Component({
  selector: "app",
  template: `
      <navbar></navbar>
      <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

    constructor(
            private appService: AppService,
            private _route: ActivatedRoute,
            private _globals: Globals) { 
    }
    
    ngOnInit() {
		this.appService.init().subscribe((result) => {
			this._globals.LOGGED_IN_USER = result.text();
        });
	}
}

