"use client";
import Product from "@/components/Product";
import Axios from "axios";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

const ProductsGrid = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    Axios.get(
      "https://e-shop-app-gf69.onrender.com/api/v1/products?limit=100"
    ).then((res) => {
      console.log(res.data.data);
      setProducts(res.data.data);
    });
  }, []);
  return (
    <DisplayProductsContainer>
      {products
        ? products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              oldPrice={product.currentPrice}
              newPrice={product.discountedPrice}
              image={product.variants[0].variantImage}
              brandImage={product.brand.image}
              brandName={product.brand.name}
            />
          ))
        : null}
    </DisplayProductsContainer>
  );
};

const DisplayProductsContainer = styled.div`
  display: grid;
  gap: 2em;
  width: 50vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export default ProductsGrid;
