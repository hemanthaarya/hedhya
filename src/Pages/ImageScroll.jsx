import { useState,useEffect , useRef} from "react";
import "./ImageSlider.css"; 
import slider1 from '../Images/slider1.jpg';
import slider2 from '../Images/slider2.jpg';
import slider3 from '../Images/slider3.jpg';
import slider4 from '../Images/slider4.jpg';
import slider5 from '../Images/slider5.jpg';

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
