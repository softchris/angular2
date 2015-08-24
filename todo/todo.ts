import {Component, View, bootstrap, NgFor } from 'angular2/angular2';

@Component({
	selector: 'todo-list',
	appInjector : [ ]
})
@View({
  	templateUrl: 'todo/todo.html',
	directives : [ NgFor ]
})

export class TodoList{
	todos:Array<string>;
	todo:string;

	constructor(){
		this.todos = [{ title: 'Vacuum', done : false}];
		this.todo = "an item";
	}

	addTodo(t){
		console.log(t);
		this.todos.push( t );
	}

	update(oldVal,newVal){
		var index = this.todos.findIndex( x => x.title === oldVal);
		this.todos[index] = newVal;
	}

	updateDone(todo){
		todo.done = !todo.done;
	}
}