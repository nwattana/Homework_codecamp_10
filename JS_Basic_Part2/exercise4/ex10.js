function draw(n) {
    mystr = "";
    count = 0;
    for(let i = 0 ; i < n; i++){
        for (let j = 0; j < n ; j++){
            num = (j+1)*(i+1);
            mystr += String(num);
        }
        mystr += '\n';
    }
    console.log(mystr)
}