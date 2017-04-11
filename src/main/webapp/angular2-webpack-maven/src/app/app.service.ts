import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Globals } from './shared/globals';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

@Injectable()
export class AppService {
	constructor(private _http: Http, private _globals: Globals){}
    
	init() {
		return this._http.get(this._globals.INIT_URL).map(res => res);
    } 
}