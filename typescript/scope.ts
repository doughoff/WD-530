function lexical(): void {
    let x = 1;
    while (x < 10){
        let y = 100;
        x++;
    }
    console.log(x);
   // console.log(y);
}
lexical();
console.log('Function has been run -----------------------')
//console.log(x);
//console.log(y);