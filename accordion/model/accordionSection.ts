export class AccordionSection {
    private _hidden: boolean;
    private _label: string;
    private _content: string;

    constructor(labelIn?: string, contentIn?: string) { 
	this._label = labelIn || 'no label';
	this._content = contentIn || 'no content';
		this.hidden = true;
 }
    get label() { return this._label; }
    set label(value: string) { this._label = value; }
    get content() { return this._content; }
    set content(value: string) { this._content = value; }
    get isHidden() {return this._hidden};
    set hidden(value: boolean) {this._hidden = value; }
}
