import { useRef, useState, useEffect } from 'react';
import {images} from '../../../constants/home-events';


const Gallery = () => {
  const galleryRef = useRef(null);
  const [imageList, setImageList] = useState([...images, ...images, ...images]); // Create a large list of images to create infinite scroll
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToScroll(1); // Mobiles
      } else if (window.innerWidth < 768) {
        setSlidesToScroll(2); // Tablets
      } else if (window.innerWidth < 1024) {
        setSlidesToScroll(3); // Large Tablets
      } else {
        setSlidesToScroll(4); // Laptops and above
      }
    };

    handleResize(); // Initial setup
    window.addEventListener('resize', handleResize); // Add event listener for resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  const handleRightArrowClick = () => {
    if (galleryRef.current) {
      const { clientWidth } = galleryRef.current;
      galleryRef.current.scrollLeft += (clientWidth / slidesToScroll) + 7; 
      // Append new images to the end of the list to create infinite scroll
      setImageList(prevList => [...prevList, ...images]);
    }
  };

  return (
    <div className="relative py-10">
      <div className='px-4 md:px-[140px] lg:px-[160px] lg2:px-[200px] xl:px-[280px] xl2:px-[320px]'>
        <p className="text-lg font-semibold font-kodeMono text-gray-400">Techvaganza 2024</p>
        <h2 className="text-5xl font-bold font-figtree uppercase overflow-hidden text-white">Photo Gallery</h2>
      </div>
      <div
        className="overflow-hidden py-8 relative whitespace-nowrap"
        ref={galleryRef}
      >
        {imageList.map((image, index) => (
          <div
            key={index}
            className="inline-block w-96 sm:w-[480px] mx-2 relative group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-96 w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold text-white mb-4">{image.title}</h2>
              <p className="text-xl text-white">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleRightArrowClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-gray-800 p-6 rounded-full shadow-md hover:shadow-lg"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Gallery;