import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const SwiperContainer = ({
  data,
  slidesPerView,
  spaceBetween,
  onReachEnd,
  children,
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween || 2}
      slidesPerView={slidesPerView || 6}
      onReachEnd={onReachEnd}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      style={{ paddingBottom: "30px" }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>{children(item)} </SwiperSlide>
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
