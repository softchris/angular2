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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var avengerService_1 = require('avengerService');
var dataService_1 = require('dataService');
var todo_1 = require('todo/todo');
var di_1 = require('angular2/di');
var MyAppComponent = (function () {
    function MyAppComponent(avengerService, dataService) {
        this.name = 'Nick fury';
        this.avengers = avengerService.avengers;
        this.data = dataService.get();
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            appInjector: [avengerService_1.AvengerService, dataService_1.DataService]
        }),
        angular2_1.View({
            templateUrl: 'templates/app.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf, todo_1.TodoList]
        }),
        di_1.Inject(avengerService_1.AvengerService, dataService_1.DataService), 
        __metadata('design:paramtypes', [avengerService_1.AvengerService, dataService_1.DataService])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
//# sourceMappingURL=app.js.map