// Function that determines an appropriate greeting based on the current time
function greet(){
    // Create a Date object representing the current date and time
    const time=new Date();
    // Declare a variable to store the greeting message
    let line;
    // Check whether the current hour is before 12 (morning)
    if(time.getHours()<12){
        line="Good morning!";
    // Check whether the current hour is before 18 (afternoon)
    }else if(time.getHours()<18){
        line="Good afternoon!";
    // If neither condition is true, it is evening
    }else{
        line="Good evening!";
    }
    // Return the appropriate greeting message
    return line;
}
// Execute this function when the webpage finishes loading
window.onload = function() {
    // Create a new paragraph element to display the greeting
    const greetLine=document.createElement("p");
    // Set the paragraph's text content to the greeting returned by greet()
    greetLine.textContent=greet();
    // Find the HTML element with the ID "greet"
    const container=document.getElementById("greet");

    // Append the greeting paragraph to the container
    container.append(greetLine);
}
// Function that displays the current date when called
function showDate(){

    // Create a Date object representing the current date and time
    const date=new Date();
    // Find the HTML element where the date will be displayed
    const dateElement=document.getElementById("date");
    // Convert the date into a readable string and display it
    dateElement.textContent=date.toDateString();
}

// Function that adds two numbers entered by the user
function addNumbers(){
    // Retrieve the value from the first input field and convert it into a decimal number
    const num1=parseFloat(document.getElementById("num1").value);
    // Retrieve the value from the second input field and convert it into a decimal number
    const num2=parseFloat(document.getElementById("num2").value);
    // Calculate the sum of the two numbers
    const result=num1+num2;
    // Display the calculated result in the HTML element with the ID "result"
    document.getElementById("result").textContent=result;
}
// Function that calculates and displays the length of user-inputted text
function textLength(){
    // Retrieve the text entered by the user
    const text=document.getElementById("textInput").value;

    // Calculate the number of characters in the text
    const length=text.length;
    // Display the original text and its character count
    document.getElementById("lengthResult").textContent=`\"${text}\" has ${length} characters.`;
}
// Function that toggles the visibility of the password
function togglePassword(){
    // Find the password input and checkbox
    // If the checkbox is checked, change the input type to "text"
    // Otherwise, change it back to "password"
    document.getElementById("password").type=document.getElementById("showPassword").checked ? "text" : "password";
}
// Function that changes the font style, color, and size of a paragraph
function changeFont(){
    // Toggle the font family between cursive and the default font
    document.getElementById("fontResult").style.fontFamily=document.getElementById("fontResult").style.fontFamily==="cursive" ? "initial" : "cursive";
    // Toggle the text color between blue and the default color
    document.getElementById("fontResult").style.color=document.getElementById("fontResult").style.color==="blue" ? "initial" : "blue";
    // Toggle the font size between 24 pixels and the default size
    document.getElementById("fontResult").style.fontSize=document.getElementById("fontResult").style.fontSize==="24px" ? "initial" : "24px";
}
// Function that toggles the visibility of a paragraph
function toggleVisibility(){
    // If the paragraph is currently hidden, display it as a block
    // Otherwise, hide it by setting display to "none"
    document.getElementById("toggleText").style.display=document.getElementById("toggleText").style.display==="none" ? "block" : "none";
}
// Function that changes the text of a paragraph to "Hello World!"
function changeText(){
    // Find the HTML element with the ID "demo"
    // Replace its existing text content with "Hello World!"
    document.getElementById("demo").textContent="Hello World!";
}