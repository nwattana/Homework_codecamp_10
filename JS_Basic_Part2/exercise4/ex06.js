function draw(n) {
    mystr = "";
    count = 1;
    for(let i = 0 ; i < n; i++){
        for (let j = 0; j < n; j++){
            temp = `${count}`
            mystr += temp;
            count++;
        }
        mystr += '\n';
    }
    console.log(mystr)
}