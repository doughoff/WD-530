Object.prototype.objCustom = function() { }; 
let numberLayer : any = { a:1, b:2, c:3 };
for (let key in numberLayer) {
  if (numberLayer.hasOwnProperty(key)) { 
    console.log(key + " is owned by this layer");
  } else {
    console.log(key + " is not owned by this layer");
  }
}