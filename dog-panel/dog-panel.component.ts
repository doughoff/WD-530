import { Component } from '@angular/core';
import { Dog } from './model/dog';
import { MockDogs } from './model/dog-data';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'dog-panel.component.3.html',
    styleUrls: ['dog-panel.component.css']
})
export class DogPanel {
    private mockDogs: Dog[] = MockDogs.SIX;
    private panelStatus: string;
    onMessageFromDetail(event: any[]) {
        var message: string = event[0];
        var dogActedOn: Dog = event[1];
        var paidAmount: number = event[2];
        console.info('Received message', event[0], event[1]);
        this.panelStatus = message + ' of $' + paidAmount + ' for ' + dogActedOn.name;
    }
}