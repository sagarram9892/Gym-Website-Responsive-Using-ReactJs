import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper/modules";
import "../styles/Testimonial.css";
import avatar_1 from "../assets/avatar01.png";
import avatar_2 from "../assets/avatar02.png";
import avatar_3 from "../assets/avatar03.jpg"
import avatar_4 from "../assets/avatar04.jpg"
import avatar_6 from "../assets/avatar06.jpg";
import avatar_7 from "../assets/avatar07.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  return (
    <>
        <h1 className="heading"> Awesome <br /> <span>Review</span> </h1>
    <div className="test">
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          duration: 2500,
        }}

        modules={[Autoplay]}
        className="mySwiper test swiper_container"
      >
        <SwiperSlide>
          <div className="img_box">
            <div className="img">
              <img src={avatar_1} alt="" />
            </div>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum amet provident laboriosam harum minus adipisci numquam
              aliquam, sapiente, perspiciatis commodi laborum facere,
              voluptatibus temporibus sit quidem repellendus asperiores. Ex,
              minus.
            </p>
            <FontAwesomeIcon icon={faQuoteLeft} className="icon"/>
            <p className="name">Kavin Lorem</p>
            <p className="pro">Senior Coach</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img_box">
            <div className="img">
              <img src={avatar_2} alt="" />
            </div>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum amet provident laboriosam harum minus adipisci numquam
              aliquam, sapiente, perspiciatis commodi laborum facere,
              voluptatibus temporibus sit quidem repellendus asperiores. Ex,
              minus.
            </p>
            <FontAwesomeIcon icon={faQuoteLeft} className="icon"/>
            <p className="name">Harry Gwen</p>
            <p className="pro">Personal Trainer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img_box">
            <div className="img">
              <img src={avatar_3} alt="" />
            </div>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum amet provident laboriosam harum minus adipisci numquam
              aliquam, sapiente, perspiciatis commodi laborum facere,
              voluptatibus temporibus sit quidem repellendus asperiores. Ex,
              minus.
            </p>
            <FontAwesomeIcon icon={faQuoteLeft} className="icon"/>
            <p className="name">Dame Doe</p>
            <p className="pro">Personal Guider </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img_box">
            <div className="img">
              <img src={avatar_4} alt="" />
            </div>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum amet provident laboriosam harum minus adipisci numquam
              aliquam, sapiente, perspiciatis commodi laborum facere,
              voluptatibus temporibus sit quidem repellendus asperiores. Ex,
              minus.
            </p>
            <FontAwesomeIcon icon={faQuoteLeft} className="icon"/>
            <p className="name">Jack Pole</p>
            <p className="pro">Founder Gym</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img_box">
            <div className="img">
              <img src={avatar_6} alt="" />
            </div>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum amet provident laboriosam harum minus adipisci numquam
              aliquam, sapiente, perspiciatis commodi laborum facere,
              voluptatibus temporibus sit quidem repellendus asperiores. Ex,
              minus.
            </p>
            <FontAwesomeIcon icon={faQuoteLeft} className="icon"/>
            <p className="name">Parker Pole</p>
            <p className="pro">Gym Ceo</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img_box">
            <div className="img">
              <img src={avatar_7} alt="" />
            </div>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum amet provident laboriosam harum minus adipisci numquam
              aliquam, sapiente, perspiciatis commodi laborum facere,
              voluptatibus temporibus sit quidem repellendus asperiores. Ex,
              minus.
            </p>
            <FontAwesomeIcon icon={faQuoteLeft} className="icon"/>
            <p className="name">Nicolla</p>
            <p className="pro">Trainer Guide</p>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>

    </>
  );
}

export default Testimonial;
