// ImageSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../assets/Skyrise 2.jpg'
import image2 from '../assets/Skyrise 3.jpg'
import image3 from '../assets/Skyrise 4.jpg'
import image4 from '../assets/Skyrise 5.jpg'
import image5 from '../assets/Skyrise 7.jpg'
import image6 from '../assets/Skyrise 8.jpg'

const images = [
    image1, image2, image3, image4, image5, image6
];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className="rounded-xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;

