import React, { useRef, useEffect, useState } from "react";
import logo from "./../../assets/LandingPage/produk.png";

const products = [
  {
    id: 1,
    category: "Skincare",
    price: "Rp.100.000,00",
    name: "Scarlet Whitening Facial Wash",
    image: logo,
  },
  {
    id: 2,
    category: "Skincare",
    price: "Rp.120.000,00",
    name: "Glow Serum",
    image: logo,
  },
  {
    id: 3,
    category: "Skincare",
    price: "Rp.90.000,00",
    name: "Aloe Vera Gel",
    image: logo,
  },
  {
    id: 4,
    category: "Skincare",
    price: "Rp.150.000,00",
    name: "Vitamin C Serum",
    image: logo,
  },
  {
    id: 5,
    category: "Skincare",
    price: "Rp.110.000,00",
    name: "Night Cream",
    image: logo,
  },
  {
    id: 6,
    category: "Skincare",
    price: "Rp.130.000,00",
    name: "Day Cream",
    image: logo,
  },
];

const Product = () => {
  const containerRef = useRef(null);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const container = containerRef.current;

    const startScrolling = () => {
      const id = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({
            left: container.clientWidth / 4,
            behavior: "smooth",
          });
        }
      }, 2000);
      setIntervalId(id);
    };

    startScrolling();

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 4,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h1 className="container-product-title mt-5" style={{ color: "#B09E7C" }}>
        Our Product
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        <button className="me-5" onClick={scrollLeft}>
          <i
            class="fa-solid fa-chevron-left"
            style={{
              color: "#B1A182",
            }}
          ></i>
        </button>
        <div
          className="container-product d-flex"
          style={{
            overflowX: "hidden",
            scrollBehavior: "smooth",
            width: "72rem", // Adjust this to your container width for 4 blocks
            position: "relative",
          }}
          ref={containerRef}
        >
          {products.concat(products).map((product, index) => (
            // Looping products with duplication for seamless scrolling
            <div
              key={index}
              className="block m-2 border-none flex-shrink-0"
              style={{ width: "18rem" }} // Each block width
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body mt-2">
                <div
                  className="card-title d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <h5>{product.category}</h5>
                  <p>{product.price}</p>
                </div>
                <p className="card-text text-start mt-2">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="ms-5" onClick={scrollRight}>
          <i
            class="fa-solid fa-chevron-right"
            style={{
              color: "#B1A182",
            }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
