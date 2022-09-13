import React from "react";
import "./about.css";
import ME from "../../assets/photo.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiProjectorFill } from "react-icons/ri";
const about = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>12 months+ working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <RiProjectorFill className="about__icon" />
              <h5>Projects</h5>
              <small>Over 30 projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            accusantium error, quidem unde quia minus at voluptatem nam esse
            cumque ad magnam minima perferendis nobis obcaecati praesentium
            doloremque quas dignissimos?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
