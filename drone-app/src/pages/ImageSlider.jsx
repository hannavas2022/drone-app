import { useState, useEffect } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { CircleDot, Circle } from 'lucide-react';

export function ImageSlider({ images }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-slide effect
    useEffect(() => {
        if (isPaused) return; // Pause if user interacts

        const interval = setInterval(() => {
            setImageIndex(index => (index + 1) % images.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [isPaused, images.length]);


    function prevImage() {
        setIsPaused(true);
        setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
        resetAutoSlide();
        
    }

function nextImage() {
    setIsPaused(true);
    setImageIndex(index => (index + 1) % images.length);
    resetAutoSlide();
        
    }

// Reset auto-slide after manual interaction
const resetAutoSlide = () => {
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5s
};

      return (
          <section aria-label="Image Slider" style={{ width: "100%", height: "100%", position: "relative" }}>
              <a href="#after-image-slider-controls" className="skip-link">Skip Image Slider Controls</a>
            <div style={{width:"100%", height: "100%", display: "flex", overflow: "hidden"} }>
                  {images.map(({ url, alt }, index) => (
                      <img key={url} src={url} alt={alt} aria-hidden={imageIndex !== index} className="slider-image" style={{ transform: `translateX(${-100 * imageIndex}%)` }} />

                )) }
            </div>
            
              <button onClick={prevImage} className="img-slider-btn" style={{ left: 0 }} aria-label="View Previous Image"><ArrowBigLeft aria-hidden /></button>
              <button onClick={nextImage} className="img-slider-btn" style={{ right: 0 }} aria-label="View Next Image"><ArrowBigRight aria-hidden /></button>
              <div style={{position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%", display: "flex", gap: ".25rem"} }>
                  {images.map((_, index) => (
                      <button key={index}
                          onClick={() => { setIsPaused(true); setImageIndex(index); resetAutoSlide(); }}
 className="img-slider-dot-btn" aria-label={'View Image ${index +1}'} >{index === imageIndex ? <CircleDot aria-hidden/> : <Circle aria-hidden/>}</button>))}
              </div>
              <div id="after-image-slider-controls"/>
        </section>
    );
}

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
    ).isRequired,
};