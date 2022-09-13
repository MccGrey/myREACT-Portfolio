import React from "react";
import "./testimonial.css";
import AVATR1 from "../../assets/create.jpg";
import AVATR2 from "../../assets/olarej.jpg";
import AVATR3 from "../../assets/poppins.jpg";
import AVATR4 from "../../assets/pops.jpg";
const testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="" />
          </div>
          <h5 className="client__name">Kendrick Stars</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            dolores numquam culpa delectus, modi error quia exercitationem
            tempora odit minima, aliquam autem facere ratione asperiores
            quibusdam, placeat magnam ipsam eligendi.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="" />
          </div>
          <h5 className="client__name">Kendrick Stars</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            dolores numquam culpa delectus, modi error quia exercitationem
            tempora odit minima, aliquam autem facere ratione asperiores
            quibusdam, placeat magnam ipsam eligendi.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="" />
          </div>
          <h5 className="client__name">Kendrick Stars</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            dolores numquam culpa delectus, modi error quia exercitationem
            tempora odit minima, aliquam autem facere ratione asperiores
            quibusdam, placeat magnam ipsam eligendi.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATR1} alt="" />
          </div>
          <h5 className="client__name">Kendrick Stars</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            dolores numquam culpa delectus, modi error quia exercitationem
            tempora odit minima, aliquam autem facere ratione asperiores
            quibusdam, placeat magnam ipsam eligendi.
          </small>
        </article>
      </div>
    </section>
  );
};

export default testimonial;
