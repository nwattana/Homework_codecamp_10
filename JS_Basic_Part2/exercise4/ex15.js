function draw(n) {
    mystr = "";
    count = 0;
    for(let i = 0 ; i < n; i++){
        for (let j = 0; j < n ; j++){
            if (i < j ){
                mystr += '-';
                continue;
            }
            mystr += '*'
        }
        mystr += '\n';
    }

    for(let i = 1 ; i < n; i++){
        for (let j = 0; j < n ; j++){
            if ((i + j + 1 ) > n){
                mystr += '-';
                continue;
            }
            mystr += '*'
        }
        mystr += '\n';
    }
    console.log(mystr)
}