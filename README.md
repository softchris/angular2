# Angular 2

## Installation

Fetch type definitions for compiler and editor

**tsd** package manager

1) Install **tsd**

	npm install -g tsd@^0.6.0

2) Install type definitions

	tsd install angular2 es6-promise rx rx-lite
3) create **app.ts** and **index.html**

4) install typescript

	npm install -g typescript@^1.5.0-beta
5) compile typescript to es5

	tsc.cmd --watch -m commonjs -t es5 --emitDecoratorMetadata --experimentalDecorators app.ts

## Your first app
app.ts

	import {Component, View, bootstrap} from 'angular2/angular2';
	
	// Annotation section
	@Component({
	  selector: 'my-app'
	})
	@View({
	  template: '<h1>Hello {{ name }}</h1>'
	})
	// Component controller
	class MyAppComponent {
	  name: string;
	  constructor() {
	    this.name = 'Some name';
	  }
	}
	
	bootstrap(MyAppComponent);

**Component** and **View** are annotations that the MyAppComponent class will be annotated with.

app.html

	<html>
	  <head>
	    <title>Angular 2 Quickstart</title>
	    <script src="https://github.jspm.io/jmcriffey/bower-traceur-runtime@0.0.87/traceur-runtime.js"></script>
	    <script src="https://jspm.io/system@0.16.js"></script>
	    <script src="https://code.angularjs.org/2.0.0-alpha.28/angular2.dev.js"></script>
	  </head>
	  <body>
	    <!-- The app component created in app.ts -->
	    <my-app></my-app>
	    <script>System.import('app');</script>
	  </body>
	</html>

The app component is called the root component, the entry for your application

## Second app, add data

Edit **app.ts**

	class MyAppComponent {
	  name: string;
	  avengers : Array<string>;
	  constructor() {
	    this.name = 'Bear2';
	    this.avengers = ["captain america", "Hulk", "Thor"];
	    
	  }
	}

1) we added a reference to a list **avengers**

2) we initialized it with 3 items

3) Edit the template to loop a list

Add NgFor to import list 

	import {Component, View, bootstrap, NgFor } from 'angular2/angular2';

Also we added the property directives to
import our loop construct **NgFor** 

	@View({
	  template: `
	  <p>My name: {{ name }}</p>
	  <p>Friends:</p>
	  <ul>
	     <li *ng-for="#name of avengers">
	        {{ name }}
	     </li>
	  </ul>
	`,
	directives : [ NgFor ]
	})

Whats new here is the for loop starts with
 
1) *ng-for

2) to loop the items you type
**#name** **of** avengers

NOT ng-repeat="item in items"

## Third app, creating a service 
Basically we move the data from app.ts to a service. Then we inject the service.

**avengerService.ts**
 
	class AvengerService{
		names: Array<string>;
		
		constructor(){
			this.names= ["captain america", "Hulk", "Thor"];
		}
	}

**app.ts**

1) we need to add imports

The service itself
	
	import { AvengerService } from 'avengerService';

Angular dependency injection
	
	import { Inject } from 'angular2/di';

2) tell component we want to inject something

	@Component({
	  selector: 'my-app',
	  appInjector : [ AvengerService ]
	})	
3) Inject it via constructor

	class MyAppComponent {
	  name: string;
	  avengers : Array<string>;
	  constructor(
	    @Inject(AvengerService) avengerService:AvengerService ) {
	    this.name = 'Nick fury';
	    this.avengers = avengerService.avengers;
	    
	  }
	}

### Let's add something more, constructs
Let's add the ng-if

1) Add import

	{ NgIf } from 'angular2/angular2';
2) Add to template

	@View({
		template : 
			`<p *ng-if="avengers.length === 3">One avenger is missing</p>`
		directives : [ NgIf ] 
	});	

## Third app - inputs

<input #todo // not part of model, temp value

<input [value]="todo"  // one-way binding from model


## Fourth app, ajax
## Fifth app routing