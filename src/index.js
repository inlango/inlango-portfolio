import React from 'react';
import ReactDOM from 'react-dom';
import { waitForElement } from '@testing-library/react';
import BillboardSlider from './billboardSlider';

const toggleMenu = () => {

    var x = document.getElementById("inlango-responsive-menu");
    if (x.className === "inlango-responsive") {
        x.className = " ";
    } else {
        x.className = "inlango-responsive";
    }
}


document.getElementById("inlango-menu-button").addEventListener("click", toggleMenu);

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <BillboardSlider />
    }

}

ReactDOM.render(<BillboardSlider/>, document.getElementById("inlango-home-billboard"))

/*
let count = 1;
let billboardImages = [
    "/images/stock/digital-transformation.jpg",
    "/images/stock/consulting.jpg", 
    "/images/stock/IT-services.jpg",
    "/images/stock/content-writing-2.jpg"
]; 


billboardImages = billboardImages.map((image)=> {
    let tempImg = new Image();
    tempImg.src = process.env.PUBLIC_URL + image;
    console.log(tempImg.src);
    return tempImg.src;
});

let changeBillboardImage = setInterval(() => {
    document.getElementById("inlango-home-billboard").firstElementChild.style.backgroundImage = "url('" + billboardImages[count] +"')";

    count = count + 1;
    if (count > billboardImages.length -1)
        count = 0;
}, 3000);*/
