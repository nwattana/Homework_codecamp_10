function draw(n) {
    mystr = "";
    count = 0;
    for(let i = 0 ; i < n; i++){
        for (let j = 0; j < n ; j++){
            if ((i + j + 1 ) > 4){
                mystr += '-';
                continue;
            }
            mystr += '*'
        }
        mystr += '\n';
    }
    console.log(mystr)
}