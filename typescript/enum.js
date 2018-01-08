var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c1 = Color.Green;
console.log(c1);
var ColorWordsEN;
(function (ColorWordsEN) {
    ColorWordsEN["Red"] = "red";
    ColorWordsEN["Green"] = "green";
    ColorWordsEN["Blue"] = "blue";
})(ColorWordsEN || (ColorWordsEN = {}));
;
var c2 = ColorWordsEN.Green;
console.log(c2);
//# sourceMappingURL=enum.js.map