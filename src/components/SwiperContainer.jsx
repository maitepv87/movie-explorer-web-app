import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const SwiperContainer = ({
  data,
  slidesPerView,
  spaceBetween,
  onReachEnd,
  children,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView || 1}
      spaceBetween={spaceBetween || 5}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 12,
        },
      }}
      onReachEnd={onReachEnd}
      modules={[Pagination]}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>{children(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

SwiperContainer.propTypes = {
  data: PropTypes.array.isRequired,
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
  onReachEnd: PropTypes.func,
  children: PropTypes.func.isRequired,
};
