import { Component } from '@angular/core';
import {AccordionData}  from './model/accordionData';
import {AccordionSection} from './model/accordionSection';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    styleUrls: ['accordion.component.css'],
    templateUrl: 'accordion.component.html'
})
export class Accordion {
    private sections: AccordionSection[] = [];
    constructor() {
        AccordionData.FOUR.forEach((element, index, array) => {
            var section =
                new AccordionSection(element.label, element.content);
            this.sections.push(section);
        });
        console.info('constructor()');
    }
    ngOnInit() {
        //console.table(this.sections);
    }
    accordionClick(event: MouseEvent) {
        console.log('Clicked accordion element', event.srcElement.id, event);
        this.sections.forEach((section) => { section.hidden = true; }) // close all
        var clickedContent = this.sections[event.srcElement.id];
        clickedContent.hidden = !clickedContent.isHidden;
        event.preventDefault();
    }
    showEventInConsole(event: Event){
        console.info(event);
        event.preventDefault();
    }
    reverseSections() {
        this.sections.reverse();
    }
    static shuffleArray(array: any[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    shuffleSections() {
        Accordion.shuffleArray(this.sections);
    }
    deleteLastSection() {
        this.sections.pop();
    }

}
