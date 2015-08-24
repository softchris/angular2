var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoList = (function () {
    function TodoList() {
        this.todos = [{ title: 'Vacuum', done: false }];
        this.todo = "an item";
    }
    TodoList.prototype.addTodo = function (t) {
        console.log(t);
        this.todos.push(t);
    };
    TodoList.prototype.update = function (oldVal, newVal) {
        var index = this.todos.findIndex(function (x) { return x.title === oldVal; });
        this.todos[index] = newVal;
    };
    TodoList.prototype.updateDone = function (todo) {
        todo.done = !todo.done;
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list',
            appInjector: []
        }),
        angular2_1.View({
            templateUrl: 'todo/todo.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
//# sourceMappingURL=todo.js.map