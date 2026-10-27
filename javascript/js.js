function greet(){
    const time=new Date();
    let line;
    if(time.getHours()<12){
        line="Good morning!";
    }else if(time.getHours()<18){
        line="Good afternoon!";
    }else{
        line="Good evening!";
    }
    return line;
}
window.onload = function() {
    const greetLine=document.createElement("p");
    greetLine.textContent=greet();
    const container=document.getElementById("greet");
    container.append(greetLine);
}
function showDate(){
    const date=new Date();
    const dateElement=document.getElementById("date");
    dateElement.textContent=date.toDateString();
}
function addNumbers(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    const result=num1+num2;
    document.getElementById("result").textContent=result;
}
