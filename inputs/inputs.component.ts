import { Component, Input } from '@angular/core';
import {Dog}            from './model/dog';
import {MockDogs}       from './model/dog-data';

//----------------------------------------------  optional child component
@Component({
    moduleId: module.id,
    selector: 'dog-name',
    styles: [
        '.dog-nameContainer {margin:.4rem; display: inline-block; text-align: right; }',
        '.dog-breed {font-size: .7rem; }'
    ],
    template: `
    <div class='dog-nameContainer'>
        <div class='dog-name'>{{dogNameIn.name | uppercase }}</div>
        <div class='dog-breed'>{{dogNameIn.breed}}</div>
    </div>
`
})
export class DogName {
    @Input( ) dogNameIn: string;
}
//----------------------------------------------  optional child component
@Component({
    moduleId: module.id,
    selector: 'dog-list',
    templateUrl: 'doglist.component.html'
})
export class DogList { 
    @Input('dogsToChildAgain') dogsFromParent: Dog[];
}
//----------------------------------------------  optional child component
@Component({
    moduleId: module.id,
    selector: 'input-child',
    templateUrl: 'inputchild.component.html'
})
export class InputChild {
    @Input('dogsToChild') dogsFromParent: Dog[];
    @Input( ) childVariableIn: string;
    @Input( ) childTextIn: string;
}
//----------------------------------------------  root component
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'inputs.component.html',
  styleUrls: ['inputs.component.css']
})
export class Inputs {
    private aNumber: number = 123;
    private dogs = MockDogs.SIX;

}
