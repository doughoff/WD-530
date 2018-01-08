Object.prototype.objCustom = function () { };
var numberLayer = { a: 1, b: 2, c: 3 };
for (var key in numberLayer) {
    if (numberLayer.hasOwnProperty(key)) {
        console.log(key + " is owned by this layer");
    }
    else {
        console.log(key + " is not owned by this layer");
    }
}
//# sourceMappingURL=for-in.js.map