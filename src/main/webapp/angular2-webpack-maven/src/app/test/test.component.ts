import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
      template: require('./test.component.html')
})


export class TestComponent implements OnInit{
      constructor(private _router : Router){}
      ngOnInit(){}
}