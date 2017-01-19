import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

//--------------------------------------  reference data class
export class Zurb {
    static validStylesForCallouts = ['', 'primary', 'secondary', 'success', 'warning', 'alert'];
    static validSizesForCallouts  = ['', 'small', 'large'];
}

//--------------------------------------  child component
@Component({
    moduleId: module.id,
    selector: 'child',
    templateUrl : `child.component.html`     
})
export class ChildComponent {
    private _styleOfCallout: string;
    private _sizeOfCallout: string;
    constructor() {
        this._styleOfCallout = '';
        this._sizeOfCallout  = '';
    }
    get styleOfCallout(): string{
        return this._styleOfCallout;
    }
    set styleOfCallout(value: string){
        if (Zurb.validStylesForCallouts.indexOf(value) >= 0) {
            this._styleOfCallout = value;
        }
    }
    get sizeOfCallout(): string{
        return this._sizeOfCallout;
    }
    set sizeOfCallout(value: string){
        if (Zurb.validSizesForCallouts.indexOf(value) >= 0) {
            this._sizeOfCallout = value;
        }
    }
    public changeStyle() : void {
        this.styleOfCallout = 
        Zurb.validStylesForCallouts[Math.floor(Math.random() * 
        Zurb.validStylesForCallouts.length)];
    }
    public changeSize() : void {
        this.sizeOfCallout = 
        Zurb.validSizesForCallouts[Math.floor(Math.random() * 
        Zurb.validSizesForCallouts.length)];
    }
}

@Component({
    moduleId: module.id,
    selector: 'app-root',
    styleUrls: [`parent-child.component.css`],
    templateUrl : `parent-child.component.html` 
})
export class ParentChildComponent { 
    @ViewChildren(ChildComponent)

    private viewChildren: QueryList<ChildComponent>;

    public changeStyle(): void {
        console.info('viewChildren object', this.viewChildren);        
        let calloutChildren = this.viewChildren;
        calloutChildren.forEach(callout => {callout.changeStyle();});
    }
    public changeSize(): void { 
        let calloutChildren = this.viewChildren;
        calloutChildren.forEach(callout => {callout.changeSize();});
    }

}
