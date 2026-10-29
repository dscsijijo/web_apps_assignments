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
function textLength(){
    const text=document.getElementById("textInput").value;
    const length=text.length;
    document.getElementById("lengthResult").textContent=`\"${text}\" has ${length} characters.`;
}
function togglePassword(){
    document.getElementById("password").type=document.getElementById("showPassword").checked ? "text" : "password";
}
function changeFont(){
    document.getElementById("fontResult").style.fontFamily="cursive";
    document.getElementById("fontResult").style.color="blue";
    document.getElementById("fontResult").style.fontSize="24px";
}
function toggleVisibility(){
    document.getElementById("toggleText").style.display=document.getElementById("toggleText").style.display==="none" ? "block" : "none";
}
function changeText(){
    document.getElementById("demo").textContent="Hello World!";
}