import React from "react";

function Header(){
let d = new Date();
const timeOfDay = d.getHours();
let greeting;
if (timeOfDay > 11 && timeOfDay < 18){
    greeting = "Afternoon"
} else if (timeOfDay >= 18) {
    greeting = "Evening"
} else {
    greeting = "Morning"
}



    return (
    <header id="trapezoid">
    <h1>Good {greeting}</h1>
    </header>)
}

export default Header;

