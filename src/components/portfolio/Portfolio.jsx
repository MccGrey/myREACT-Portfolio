import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Portfolio</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>

          <h3>title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>

          <h3>title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>

          <h3>title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>

          <h3>title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>

          <h3>title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>

          <h3>title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
