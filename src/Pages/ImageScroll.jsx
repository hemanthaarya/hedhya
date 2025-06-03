import { useState,useEffect , useRef} from "react";
import "./ImageSlider.css"; 
import slider1 from '../slider1.png';
import slider2 from '../slider2.png';
import slider3 from '../slider3.png';
import slider4 from '../slider4.png';
import slider5 from '../slider5.png';

const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let count = 0;

    intervalRef.current = setInterval(() => {
      count++;

      if (count <= images.length) {
        // Move to next image or back to first
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }

      if (count === images.length + 1) {
        clearInterval(intervalRef.current);;
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="slide-image" />
        ))}
      </div>

      <button className="slider-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
