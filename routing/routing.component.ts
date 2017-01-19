import { Component } from '@angular/core';

//--------------------------------------------- child component
@Component({
    moduleId: module.id,
    selector: 'aSelector',
    template : '<p>This is the home page</p>'
})
export class A { }
//--------------------------------------------- child component
@Component({
    moduleId: module.id,
    selector: 'bSelector',
    template : '<p>This is my blog.</p>'
})
export class B { }
//--------------------------------------------- child component
@Component({
    moduleId: module.id,
    selector: 'cSelector',
    template : '<p>Please contact us by tomorrow.</p>'
})
export class C { }
//--------------------------------------------- root component
@Component({
    moduleId: module.id,
    selector: 'app-root',
    styleUrls: ['routing.component.css'],
    templateUrl : `routing.component.html` 
})
export class Routing { }
