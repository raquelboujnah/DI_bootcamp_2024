import { useState } from 'react';
import './carousel.css';

const images = [
  'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
  'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
  'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp',
  'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="carousel-container">
      <div className="large-image">
        <img src={currentImage} alt="Large Display" className="fade" />
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='picture'
            className="thumbnail"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;