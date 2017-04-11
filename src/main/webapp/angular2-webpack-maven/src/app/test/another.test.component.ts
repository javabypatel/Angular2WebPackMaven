import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {TestService} from "./test.service";  
import {Test} from "./test.model";

@Component({
      template: require('./another.test.component.html'),
})

export class AnotherTestComponent implements OnInit{

      constructor(
            private _router : Router,
            private _service: TestService){
      }
      ngOnInit(){}
}