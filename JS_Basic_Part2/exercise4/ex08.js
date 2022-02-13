function draw(n) {
    mystr = "";
    count = 0;
    for(let i = 0 ; i < n; i++){
        num = 2 * i;
        mystr += String(num);
        mystr += '\n';
    }
    console.log(mystr)
}