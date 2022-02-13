function draw(n) {
    mystr = "";
    n++
    count = 0;
    for(let i = 1 ; i < n; i++){
        for (let j = 1; j < n ; j++){
            if (i < j ){
                mystr += '-'
                continue;
            }
            mystr += String(i);
        }
        mystr += '\n';
    }

    for(let i = 1 ; i < (n - 1); i++){
        for (let j = 1; j < n ; j++){
            if ((i + j + 1 ) > n){
                mystr += '-'
                continue;
            }
            mystr += String(n - i - 1);
        }
        mystr += '\n';
    }
    console.log(mystr)
}