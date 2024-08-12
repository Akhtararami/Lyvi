import React, { useState, useRef } from "react";
import foto from "./../../assets/LandingPage/Productcategory.png";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleCategoryClick = (event, index) => {
    event.preventDefault(); // Mencegah halaman kembali ke atas
    setActiveIndex(index);
    if (carouselRef.current) {
      const carouselElement = carouselRef.current;
      const bsCarousel = new window.bootstrap.Carousel(carouselElement);
      bsCarousel.to(index);
    }
  };

  return (
    <div className="container-categories text-center">
      <div className="row">
        <div className="col main">
          <ul>
            <h3>Top Categories</h3>
            <li>
              <a href="#" onClick={(event) => handleCategoryClick(event, 0)}>
                <i className="fa-regular fa-face-smile"></i>
                <span>Facewash</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(event) => handleCategoryClick(event, 1)}>
                <i className="fa-solid fa-droplet"></i>
                <span>Toner</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(event) => handleCategoryClick(event, 2)}>
                <i className="fa-solid fa-bottle-droplet"></i>
                <span>Serum</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(event) => handleCategoryClick(event, 3)}>
                <i className="fa-regular fa-sun"></i>
                <span>Sunscreen</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col detail">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            ref={carouselRef}
          >
            <div className="carousel-inner">
              <div
                className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
              >
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <img src={foto} alt="Face Wash" />
                    </div>
                    <div className="col">
                      <p className="fs-4 text-start">Face Wash</p>
                      <h3 className="text-start fw-semibold text-light">
                        Lyfi Face Wash 100ml
                      </h3>
                      <p className="text-start">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odio, voluptatibus at exercitationem temporibus
                        suscipit cumque natus maxime modi! Velit maxime
                        dignissimos provident nostrum eius earum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
              >
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <img src={foto} alt="Toner" />
                    </div>
                    <div className="col">
                      <p className="fs-4 text-start">Toner</p>
                      <h3 className="text-start fw-semibold text-light">
                        Toner type A
                      </h3>
                      <p className="text-start">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odio, voluptatibus at exercitationem temporibus
                        suscipit cumque natus maxime modi! Velit maxime
                        dignissimos provident nostrum eius earum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
              >
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <img src={foto} alt="Serum" />
                    </div>
                    <div className="col">
                      <p className="fs-4 text-start">Serum</p>
                      <h3 className="text-start fw-semibold text-light">
                        Serum tipe A
                      </h3>
                      <p className="text-start">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odio, voluptatibus at exercitationem temporibus
                        suscipit cumque natus maxime modi! Velit maxime
                        dignissimos provident nostrum eius earum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}
              >
                <div className="container text-center">
                  <div className="row">
                    <div className="col">
                      <img src={foto} alt="Sunscreen" />
                    </div>
                    <div className="col">
                      <p className="fs-4 text-start">Sunscreen</p>
                      <h3 className="text-start fw-semibold text-light">
                        Sunscreen para iblis
                      </h3>
                      <p className="text-start">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odio, voluptatibus at exercitationem temporibus
                        suscipit cumque natus maxime modi! Velit maxime
                        dignissimos provident nostrum eius earum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
