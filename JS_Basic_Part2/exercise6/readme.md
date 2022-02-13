# 6.2 แบบฝึกหัด
### แปลง function ข้างล่างให้อยู่ในรูป arrow function
``` Javascript
function ask(question , yes , no){
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function(){alert("you agreed.");},
    function(){alert("You canceled the execution.");}
);
```

## ANS
```Javascript
let  ark = (question,yes, ok){
    if(confirm(question)) yes()
    else no();
}
```