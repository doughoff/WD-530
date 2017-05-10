var variable = "a variable";
var backtickedString = "This is a string.\nThis is another string.\nvariable: " + variable + "\nThis is the end.\n";
console.log(backtickedString);
function wrapTextWithTag(text, tag) {
    return "<" + tag + ">\n    " + text + "\n</" + tag + ">";
}
console.log(wrapTextWithTag('A paragraph', 'p'));
//# sourceMappingURL=backtick.js.map