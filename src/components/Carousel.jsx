import { React, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import db from "./db";

function Carousel() {
  let list = [];
  const [carousel, setCarousel] = useState([
    { title: "fdsfa", src: "assets/marhba.jpg", detail: "fdsfsaf" },
    { title: "fdsfa", src: "assets/marhba.jpg", detail: "fdsfsaf" },
    { title: "fdsfa", src: "assets/marhba.jpg", detail: "fdsfsaf" }
  ]);
  async function getCarousel() {
    let data = await getDocs(query(collection(db, "carousel")));
    data.forEach((doc) => {
      list.push(doc.data());
    });
    setCarousel(list);
    console.log(carousel);
  }
  getCarousel();

  return (
    <div className="bd-example">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel[0].src} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{carousel[0].title}</h5>
              <p>{carousel[0].detail}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel[1].src} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{carousel[1].title}</h5>
              <p>{carousel[1].detail}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel[2].src} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{carousel[2].title}</h5>
              <p>{carousel[2].detail}</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
