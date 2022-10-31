import React, { Component, useState } from "react";
import "./Testimonials.css";
import Abs_Slider from "../../../AbstractComponent/Abs_slider/Abs_Slider";
import testImg from "../../../Assestes/photos/testiimg.jpg";
import testImg2 from "../../../Assestes/photos/testimg2.jpg";
import testimonialimg from "../../../Assestes/photos/kixx-3.jpg";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [slider, setSlider] = useState([
    {
      sliderImg: testImg,
      ClientName: "Monica pepe",
      reviews:
        "Mani has gone above and beyond to resolve problems on a website. He is smart and doesn’t quit! A very hard worker who I will continue to work with for all my future needs. He knows many things and is a hard worker. Great problem solver!!!",
    },
    {
      sliderImg: testImg2,
      ClientName: "Gabriel Lowe",
      reviews:
        "Perfect. Exactly what I needed! Looking forward to future projects! Thanks so much!!!!",
    },
  ]);
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
              <img src={testimonialimg} alt="img" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-6 text-center ">
              <div className="testimonial-section">
                <h3 className="heading">Testimonial</h3>
                <h3 className="client-says">What Client Says About Us</h3>
                <Slider {...settings}>
                  {slider.map((e, idx) => (
                    <div key={idx}>
                      <Abs_Slider
                        sliderImg={e.sliderImg}
                        ClientName={e.ClientName}
                        reviews={e.reviews}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
