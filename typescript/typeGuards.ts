{
    function addTwoTo(numberIn: number | string): any {
        if (typeof numberIn === 'number') {
            return +numberIn + 2;
        } else {
            return numberIn + "2";
        }
    }

    let x: number | string = '2';
    //let x:number | string = 2;
    console.log(addTwoTo(x));

    let y: number | undefined = undefined;
    let y2 = y!;
    console.log(y2);

}