import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./../../assets/LandingPage/produk.png";

// Data produk
const products = [
  {
    id: 1,
    name: "Scarlett Whitening Facial Wash",
    price: "Rp 100.000,-",
    category: "Face Wash",
    image: logo,
  },
  {
    id: 2,
    name: "Scarlett Whitening Toner",
    price: "Rp 110.000,-",
    category: "Toner",
    image: logo,
  },
  {
    id: 3,
    name: "Scarlett Whitening Serum",
    price: "Rp 120.000,-",
    category: "Serum",
    image: logo,
  },
  {
    id: 4,
    name: "Scarlett Whitening Serum",
    price: "Rp 120.000,-",
    category: "Lip Balm",
    image: logo,
  },
  // Tambahkan produk lainnya sesuai kebutuhan
];

// Komponen Utama
function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtering produk berdasarkan kategori yang dipilih
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mt-5">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Komponen CategoryFilter
function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    "All",
    "Face Wash",
    "Toner",
    "Moisturizer",
    "Serum",
    "Sunscreen",
    "Exfoliator",
    "Micellar Water",
    "Lip Balm",
  ];
}

// Komponen ProductCard
function ProductCard({ product }) {
  return (
    <div className="product-card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <p className="text-muted fw-semibold">{product.category}</p>
        <h6 className="card-title">{product.name}</h6>
        <p className="card-text">{product.price}</p>
      </div>

      <a className="detail-produk" href="">
        <div className="card-footer">
          <div className="w-100 d-flex justify-content-center align-items-center">
            Lihat Produk
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductList;
