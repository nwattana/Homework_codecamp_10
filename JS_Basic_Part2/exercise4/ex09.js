function draw(n) {
    mystr = "";
    count = 0;
    for(let i = 0 ; i < n; i++){
        num = 2 * (i+1);
        mystr += String(num);
        mystr += '\n';
    }
    console.log(mystr)
}