//import React from 'react';
//import ReactDOM from 'react-dom';

//  const element = <h1></h1>;

//ReactDOM.render(element, document.getElementById("app"));


const toggleMenu = () => {

    var x = document.getElementById("inlango-responsive-menu");
    if (x.className === "inlango-responsive") {
        x.className = " ";
    } else {
        x.className = "inlango-responsive";
    }
}


document.getElementById("inlango-menu-button").addEventListener("click", toggleMenu);