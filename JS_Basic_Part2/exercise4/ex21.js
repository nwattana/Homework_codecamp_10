function draw(n) {
    mystr = "";
    count = 0;
    col = (2*n) - 1;
    for (let i = 1 ; i < (n + 1);i++){
        for (let j = 0; j < col; j++){
            if ((j >= (n - 1 + i)) || (j <= (n - 1 - i))) {
                mystr += '-'
                continue;
            }
            mystr += '*';
        }
        mystr += '\n';
    }
    console.log(mystr)
}