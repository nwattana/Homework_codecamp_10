function draw(n) {
    mystr = ""
    for(let i = 0 ; i < n; i++){
        for (let j = 0; j < n; j++){
            mystr += '*';
        }
        mystr += '\n';
    }
    console.log(mystr)
}