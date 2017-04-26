import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-root, .app-root, [app-root]',
  templateUrl: 'app.component.1.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private _src: string;
  private _alt: string;
  private needsBorder: boolean;
  private isSuccess: boolean;
  private isHidden: boolean;
  private isFourColumns: boolean;

  constructor() {
    this._src = 'http://www.funny-animalpictures.com/media/content/items/images/funnydogs0007_O.jpg';
    this._alt = 'funny dogs';
    this.needsBorder = true;
    this.isSuccess = false;
    this.isHidden = false;
    this.isFourColumns = true;

  }
  get src(): string { return this._src; }
  get alt(): string { return this._alt; }
}

