import React, { Component } from 'react';
import {bana, phuquoc, hoian} from "../../assets/listImage";
import "./SlideUser.css"
import { Link } from 'react-router-dom';

// import "./script.js";
class SlideUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideImage: 1
        };
    }

    componentDidMount() {
        this.updateDisplay(this.state.slideImage);
    }

    updateDisplay = (newSlideIndex) => {
        const totalSlides = 3;

        if (newSlideIndex > totalSlides) {
            newSlideIndex = 1;
        } else if (newSlideIndex < 1) {
            newSlideIndex = totalSlides;
        }

        this.setState({ slideImage: newSlideIndex });
    };

    plusSlides = (n) => {
        this.updateDisplay(this.state.slideImage + n);
    };

    currentSlide = (n) => {
        this.updateDisplay(n);
    };



    render() {
        const images = [
            { src: bana, title: "Bà Nà Hill" },
            { src: hoian, title: "Hội An" },
            { src: phuquoc, title: "Phú Quốc" }
        ];
        const { slideImage } = this.state;
        return (
            <div className="main">
                {/*slider*/}
                <div className="main__slide">
                    {images.map((slide, index) => (
                        <div
                            key={index}
                            className="home_slide__item"
                            style={{ display: slideImage === index + 1 ? 'grid' : 'none' }}
                        >
                            <div className="home_slide__background" style={{ backgroundImage: `url(${slide.src})` }}></div>
                            <div className="home_slider__content">
                                <div className="home_slider_content_inner animated bounceInLeft">
                                    <h1>tour</h1>
                                    <h1>{slide.title}</h1>
                                    < div className="button home_slider__button">
                                        <div className="button_bcg" />
                                        <Link to="/filter">Xem ngay<span /><span /><span /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="main_slide__nav nav__prev">
                        <i onClick={() => this.plusSlides(-1)} className="fas fa-chevron-circle-left" />
                    </div>
                    <div className="main_slide__nav nav__next">
                        <i onClick={() => this.plusSlides(1)} className="fas fa-chevron-circle-right" />
                    </div>
                    <div className="main_slide__dots">
                        <ul className="customs_dots">
                            {[1, 2, 3].map((num) => (
                                <li
                                    key={num}
                                    className={`customs_dot ${slideImage === num ? 'active' : ''}`}
                                    onClick={() => this.currentSlide(num)}
                                >
                                    {num.toString().padStart(2, '0')}.
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default SlideUser;