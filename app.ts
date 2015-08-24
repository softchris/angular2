/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor, NgIf } from 'angular2/angular2';
import { AvengerService } from 'avengerService';
import { DataService } from 'dataService';
import { TodoList } from 'todo/todo';

import { Inject } from 'angular2/di';


@Component({
  selector: 'my-app',
  appInjector : [ AvengerService, DataService ]
})
@View({
  templateUrl: 'templates/app.html',
  directives : [ NgFor,NgIf, TodoList ]
})

@Inject(AvengerService, DataService)
class MyAppComponent {
  name: string;
  avengers : Array<string>;
  data : Array<string>; 
  
  constructor( avengerService:AvengerService, dataService:DataService ) {
    this.name = 'Nick fury';
    this.avengers = avengerService.avengers;
    this.data = dataService.get();
  }
}

bootstrap(MyAppComponent);