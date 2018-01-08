function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
  }
  
  var gen = logGenerator();
  
  // the first call of next executes from the start of the function
  // until the first yield statement
  gen.next();
  gen.next('pretzel');
  gen.next('california');
  gen.next('mayonnaise');  
  gen.next('nowhere');