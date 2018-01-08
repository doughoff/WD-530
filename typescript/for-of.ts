{
    Object.prototype.objCustom = function () { };
    let numberObject: any = { a: 1, b: 2, c: 3 };
    for (let key of numberObject) {
        console.log(key);
    }
}
