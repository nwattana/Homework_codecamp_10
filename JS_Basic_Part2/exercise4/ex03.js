function draw(n) {
    mystr = ""
    for(let i = 0 ; i < n; i++){
        for (let j = 0; j < n; j++){
            temp = `${j+1}`
            mystr += temp;
        }
        mystr += '\n';
    }
    console.log(mystr)
}