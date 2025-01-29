import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import styled from "styled-components";

const MySwiper = styled(Swiper)`
  padding-bottom: 5px;
`;

const SlideCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  margin-top: 1rem;

  img {
    max-width: 200px;
    height: auto;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.2);
  }
`;
function Slider() {
  return (
    <>
      <MySwiper
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={15000}
        navigation={false}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <SlideCon>
            <img
              src="src/assets/slider_image/entry-level.svg"
              alt="Entry level"
            />
            <img src="src/assets/slider_image/reina.svg" alt="Reina" />
            <img src="src/assets/slider_image/spurt.svg" alt="Spurt" />
            <img
              src="src/assets/slider_image/trinipicks.svg"
              alt="Trinipicks"
            />
            <img src="src/assets/slider_image/keytrust.svg" alt="Keytrust" />
          </SlideCon>
        </SwiperSlide>

        <SwiperSlide>
          <SlideCon>
            <img
              src="src/assets/slider_image/entry-level.svg"
              alt="Entry level"
            />
            <img src="src/assets/slider_image/reina.svg" alt="Reina" />
            <img src="src/assets/slider_image/spurt.svg" alt="Spurt" />
            <img
              src="src/assets/slider_image/trinipicks.svg"
              alt="Trinipicks"
            />
            <img src="src/assets/slider_image/keytrust.svg" alt="Keytrust" />
          </SlideCon>
        </SwiperSlide>
      </MySwiper>
    </>
  );
}

export default Slider;
