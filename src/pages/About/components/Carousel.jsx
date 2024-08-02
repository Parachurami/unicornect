import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import the CSS file for styling

const Carousel = ({ slides, interval = 3000, style }) => {

    // Carousel animation
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [slides.length, interval]);


    // Ball animation
    const initialPositions = [0, 1];
    const [positions, setPositions] = useState(initialPositions);

    useEffect(() => {
        const ballInterval = setInterval(() => {
            setPositions((prevPositions) => {
                const newPositions = [...prevPositions];
                const first = newPositions.shift();
                newPositions.push(first);
                return newPositions;
            });
        }, interval);

        return () => clearInterval(ballInterval);
    }, [interval]);


    // ball colors
    var ballColors = ['black', 'transparent'];

    return (
        <div className={'carousel-container'} style={{...style}}>
            <div className="carousel" style={{zIndex: 2}}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={slide} alt={`Slide ${index}`}/>
                    </div>
                ))}
            </div>
            <div className="ball-container">
                {positions.map((position, index) => (
                    <div
                        key={index}
                        className="ball"
                        style={{left: `${position * 44}px`, backgroundColor:ballColors[index]}}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
