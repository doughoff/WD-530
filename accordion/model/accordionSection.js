"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccordionSection = /** @class */ (function () {
    function AccordionSection(labelIn, contentIn) {
        this._label = labelIn || 'no label';
        this._content = contentIn || 'no content';
        this.hidden = true;
    }
    Object.defineProperty(AccordionSection.prototype, "label", {
        get: function () { return this._label; },
        set: function (value) { this._label = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionSection.prototype, "content", {
        get: function () { return this._content; },
        set: function (value) { this._content = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionSection.prototype, "isHidden", {
        get: function () { return this._hidden; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AccordionSection.prototype, "hidden", {
        set: function (value) { this._hidden = value; },
        enumerable: true,
        configurable: true
    });
    return AccordionSection;
}());
exports.AccordionSection = AccordionSection;
//# sourceMappingURL=accordionSection.js.map