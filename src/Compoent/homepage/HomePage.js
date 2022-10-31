import React, { useState } from "react";
import "./HomePage.css";
import Slider from "react-slick";
import ContactUs from "./contactus/ContactUs";
import banner2 from "../../Assestes/photos/banner-sec2.jpg";
import Testimonials from "./Testimonial/Testimonials";
import Abs_HomeSli from "../../AbstractComponent/Abs_HomeSli/Abs_HomeSli";
import Pagination from "./pagination/Pagination";

const HomePage = () => {
  const [slider, setSlider] = useState([
    {
      img: banner2,
    },
    {
      img: banner2,
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
                    {/* <Abs_HomeSli sliderImg={banner2} /> */}

      <section className="homes_page">
        <div className="container-fluid homepage">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="slider-sli">
                <Slider {...settings}>
                  {slider.map((e, idx) => (
                    <Abs_HomeSli sliderImg={e.img} />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <Pagination/>
        <ContactUs />
      </section>
    </>
  );
};
export default HomePage;
