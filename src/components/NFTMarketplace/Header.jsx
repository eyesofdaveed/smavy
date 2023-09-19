import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className="style-12">
      <div className="container">
        <div className="info">
          <h2 className="line-title">
            <span className="line-text"> Найди </span>{" "}
            <small>
              Наш центр предлагает самый разновидный <br /> Курсы которые
              подойдут ученику любого возраста <br /> и навыков и умения{" "}
            </small>{" "}
          </h2>
          <h2> Свой Курс </h2>
          <img
            src="/assets/img/icons/star2.png"
            alt=""
            className="star1 scale_up_down"
          />
          <img
            src="/assets/img/icons/star2.png"
            alt=""
            className="star2 scale_up_down"
          />
        </div>
      </div>
      <div className="imgs-content pt-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 pt-150 col-6">
              <div className="main-img img-cover">
                <img src="/assets/img/header/kid.jpeg" alt="" />
                <div className="inf">
                  <h6> Курсы для Школьников </h6>
                  <p>
                    {" "}
                    <span className="color-999"> Возраст: </span> 10-18{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-last order-lg-0">
              <div className="vid-info">
                <div className="icon-content">
                  <div className="icon">
                    <img src="/assets/img/icons/star3.png" alt="" />
                  </div>
                </div>
                <div className="img-vid-content mb-5 mb-lg-0">
                  <p> Что вас ожидает </p>
                  <div className="img-line">
                    <img
                      src="/assets/img/header/header_12_linearrow.png"
                      alt=""
                    />
                  </div>
                  <div className="img-vid img-cover">
                    <img src="/assets/img/header/header_12_3.png" alt="" />
                    <a
                      href="https://youtu.be/pGbIOC83-So?t=21"
                      data-lity
                      className="vid_icon icon-60 img-cover rounded-circle"
                      onClick={openVideo}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="main-img img-cover">
                <img src="/assets/img/header/adult.jpg" alt="" />
                <div className="inf">
                  <h6> Курсы для Взрослых </h6>
                  <p>
                    {" "}
                    <span className="color-999"> Возраст: </span> 18 +{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="pGbIOC83-So"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
