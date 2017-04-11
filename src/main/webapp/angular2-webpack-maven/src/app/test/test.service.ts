import { Injectable }                                   from '@angular/core';
import { Http }                                         from '@angular/http';
import { Headers, RequestOptions, RequestOptionsArgs}   from '@angular/http';
import { Globals }                                      from '../shared/globals';

@Injectable()
export class TestService {
	constructor(private _http: Http, private _globals: Globals){}
}