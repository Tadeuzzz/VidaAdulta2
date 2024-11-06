import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
        const slideInterval = setInterval(nextSlide, interval);
        return () => clearInterval(slideInterval);
    }, [images.length, interval]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="image-slider">
            <button className="image-slider__button image-slider__button--prev" onClick={handlePrev}>❮</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="image-slider__image" />
            <button className="image-slider__button image-slider__button--next" onClick={handleNext}>❯</button>
            <div className="image-slider__indicator">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`image-slider__dot ${index === currentIndex ? 'image-slider__dot--active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
