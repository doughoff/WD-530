import { Component } from '@angular/core';

//-------------------------------------------  optional child component
@Component({
   moduleId: module.id,
   selector: 'ignored-stuff',
   templateUrl:'ignoring-child.html'
})
export class IgnoringChild { }
//-------------------------------------------  optional child component
@Component({
   moduleId: module.id,
    selector: 'unorganized-stuff',
    templateUrl:'organizing-child.html'
})
export class OrganizingChild { }
//-----------------------------------------------  root (app) component
@Component({
    moduleId: module.id,
    selector: 'app-root',
    styleUrls: ['children.component.css'],
    templateUrl : `children.component.html` 
})
export class Children { }
