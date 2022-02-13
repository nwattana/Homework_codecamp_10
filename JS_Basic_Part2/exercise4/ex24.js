function draw(n) {
    mystr = "";
    count = 1;
    col = (2*n) - 1;
    for (let i = 1 ; i < (n + 1);i++){
        for (let j = 0; j < col; j++){
            if((j >= (n - 1 + i)) || (j <= (n - 1 - i))){
                mystr += '-'
                continue;
            }
            num = String(count);
            mystr += num;
            count++;
        }
        mystr += '\n';
    }
    for (let i = 1; i < n;i++){

        for (let j  = 0; j < col;j++){
            if ((j >= (n - 1 + (n - i)) || (j <= (n - 1 - (n- i))))) {
            mystr += '-';
            continue;
        }
        num = String(count);
        mystr += num;
        count++;
    }
    mystr += '\n';
}
console.log(mystr)
}