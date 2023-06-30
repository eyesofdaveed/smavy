import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import screenshots from "@data/App/screenshots.json";
import Link from "next/link";

import "swiper/css";

const Screenshots = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <div className="screenshots style-4" data-scroll-index="4">
      <h2 className="team-title">Наша <span>команда</span></h2>
      <div className="screenshots-slider style-4">
        {loadSwiper && (
          <Swiper
            onSlideChange={function(){setActiveSlide(this.realIndex)}}
            className="swiper-container"
            spaceBetween={0}
            slidesPerView={5}
            pagination={false}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            loop={true}
            autoplay={{
              delay: 4000,
            }}
            speed={1000}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 2,
              },
              787: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {screenshots.map((screenshot, index) => (
              <SwiperSlide key={index}>
                <div className="img" >
                  <img src={screenshot.img} alt="" />
                    <Link href="/team" >
                        <a className={`screenshot-btn ${activeSlide !== index && 'disabled'}`}>{screenshot.text}</a>
                    </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <img src="/assets/img/screenshots/hand.png" alt="" className="mob-hand" />
    </div>
  );
};

export default Screenshots;
