import React from 'react';
import ReactDOM from 'react-dom';

export default class BillboardSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCount: 1,
            imagesURL: [
                "/images/stock/consulting.jpg",
                "/images/stock/digital-transformation.jpg",
                "/images/stock/IT-services.jpg",
                "/images/stock/content-writing.jpg"
            ],
            imageReady: 0,
            currentImage: "/images/stock/consulting.jpg",
            images: [],
            timeImageChange : "",
            animationChange : ""
        }
        this.changeImage = this.changeImage.bind(this);
        this.startSliderTimer = this.startSliderTimer.bind(this);
        this.handleNextImage = this.handleNextImage.bind(this);
        this.handlePrevImage = this.handlePrevImage.bind(this);
    }

    componentDidMount() {

        this.setState({
            imageReady: this.state.imagesURL.length
        });

        let tempCount = 0;
        let tempImage = [];

        this.state.imagesURL.forEach(
            (imageURL) => {

                const loader = new Image()
                loader.src = imageURL;

                tempImage.push(loader);

            });

        for (let i = 0; i < tempImage.length; i++) {
            tempImage[i].onload = () => {

                this.setState({
                    imageReady: this.state.imageReady - 1
                });
            }
        }
        this.setState({
            images: tempImage
        });

        /*this.state.images.forEach((image) => {
            image.onload = () => {
                this.setState({
                    imageReady: this.state.imageReady - 1
                });

            }
        });*/
        this.startSliderTimer();

    }

    startSliderTimer() {
        

        this.setState({
            timeImageChange: setInterval(() => {
                this.changeImage();
                this.setState({
                    imageCount: this.state.imageCount + 1
                });
                if (this.state.imageCount > this.state.imagesURL.length - 1)
                    this.setState({
                        imageCount: 0
                    });
            }, 6000)
        });
    }

    changeImage() {
        
        
        this.setState({
            currentImage: this.state.imagesURL[this.state.imageCount]
        });
        document.getElementById("inlango-slider-image").style.opacity = 1;
            this.setState({
                animationChange: setTimeout(() => {
                    document.getElementById("inlango-slider-image").style.opacity = 0;
                }, 5400)
            });
        
    }

    handleNextImage(){
        if(this.state.imageCount === this.state.images.length - 1){
            this.setState({
                imageCount: 0
            });
        }
        else {
            this.setState({
                imageCount: this.state.imageCount + 1
            });
        }
        
        clearTimeout(this.state.animationChange);
        this.changeImage();
        clearInterval(this.state.timeImageChange)
        this.startSliderTimer();
    }

    handlePrevImage(){
        if(this.state.imageCount === 0) {
            this.setState({
                imageCount: this.state.images.length - 1
            });
        }
        else{
            this.setState({
                imageCount: this.state.imageCount - 1
            });
        }
        clearTimeout(this.state.animationChange);
        this.changeImage();
        clearInterval(this.state.timeImageChange)

        this.startSliderTimer();
    }

    render() {

        //if (this.state.imageReady.every((image) => { return image === true })) {

        if (this.state.imageReady != 0) {
            return (
                <div>
                    <div className="inlango-billboard-content">
                        <div className="inlango-billboard-left"></div>
                        <div>
                            <h1><span>Loading...</span></h1>
                        </div>
                        <div className="inlango-billboard-right"></div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="inlango-billboard-content">
                        <div className="inlango-billboard-left" onClick={this.handlePrevImage}><i className="fas fa-arrow-left"></i></div>
                        <div>
                            <h1><span>Hello World!</span></h1>
                            <p><span>We are Inlango.</span></p>
                            <p><span>With us, perfection and functionality is a standard.</span></p>
                            <p><span>Good to see ya</span></p>
                            <a href="#content">Here's what we do do.</a>
                        </div>
                        <div className="inlango-billboard-right" onClick={this.handleNextImage}><i className="fas fa-arrow-right"></i></div>
                    </div>
                    <img className="inlango-slider-image" id="inlango-slider-image" src={this.state.currentImage} />
                </div>
            );
        }
        //}
    }
}