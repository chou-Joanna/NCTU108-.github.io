var a = Number(prompt("A?"));
var b = Number(prompt("B?"));
function compare(a, b){
 if(a > b){
    return"A>B";
}
else if(a == b){
    return"A=B";
}
else if(a < b){
    return"A<B";
}
else {
    return"這不是數字"+;
}
}
alert(compare(a, b));