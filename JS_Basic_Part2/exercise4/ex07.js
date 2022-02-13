function draw(n) {
    mystr = "";
    count = 0;
    for(let i = 0 ; i < n; i++){
        for (let j = 0; j < n; j++){
            temp = `${(n*n)-count}`
            mystr += temp;
            count++;
        }
        mystr += '\n';
    }
    console.log(mystr)
}