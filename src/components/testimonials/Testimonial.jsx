import React from "react";
import "./testimonial.css";
import AVATR1 from "../../assets/create.jpg";
import AVATR2 from "../../assets/olarej.jpg";
import AVATR3 from "../../assets/poppins.jpg";
import AVATR4 from "../../assets/pops.jpg";

const data = [
  {
    avatar: AVATR1,
    name: "tiwa savage",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores culpa, alias harum aperiam quaerat quisquam repellendus unde ducimus exercitationem, odio voluptate. Soluta, deleniti est vel voluptate minus autem ea!",
  },

  {
    avatar: AVATR2,
    name: "tiwa savage",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores culpa, alias harum aperiam quaerat quisquam repellendus unde ducimus exercitationem, odio voluptate. Soluta, deleniti est vel voluptate minus autem ea!",
  },

  {
    avatar: AVATR3,
    name: "tiwa savage",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores culpa, alias harum aperiam quaerat quisquam repellendus unde ducimus exercitationem, odio voluptate. Soluta, deleniti est vel voluptate minus autem ea!",
  },

  {
    avatar: AVATR4,
    name: "tiwa savage",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores culpa, alias harum aperiam quaerat quisquam repellendus unde ducimus exercitationem, odio voluptate. Soluta, deleniti est vel voluptate minus autem ea!",
  },
];

const testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar1" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default testimonial;
