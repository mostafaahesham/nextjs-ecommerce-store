"use client"

import { styled, css } from "styled-components";
import ImageGrid from "./ImagesGrid";
import Variant from "./Variant";
import Axios from "axios";
import { useState, useEffect, useCallback } from "react";

const ProductDetails = ({
  category,
  subCategory,
  name,
  description,
  currentPrice,
  discountedPrice,
  sizes,
  images,
  brandImage,
  brandName,
}) => {
  const [product, setProduct] = useState();
  const [variant, setVariant] = useState(0);

  useEffect(() => {
    Axios.get(
      "https://e-shop-app-gf69.onrender.com/api/v1/products/647b4f35396ebb38fe9b68c6"
    ).then((res) => {
      console.log(res.data.data);
      setProduct(res.data.data);
    });
  }, []);
  return (
    <ProductDetailsContainer>
      {product ? (
        <>
          <ImageGrid images={product.variants[variant].variantImages} />
          <ProductSummary>
            <ProductType>
              {product.category.name} / {product.subCategory.name} /{" "}
              {product.name}
            </ProductType>
            <ProductName>{product.name}</ProductName>
            <ProductSubCategory>{product.subCategory.name}</ProductSubCategory>
            <ProductPriceSection>
              <h4>PRICE</h4>
              {product.discountedPrice ? (
                <>
                  <CurrentPrice strikethrough>
                    EGP {product.currentPrice}
                  </CurrentPrice>
                  <DiscountedPrice>
                    EGP {product.discountedPrice}
                  </DiscountedPrice>
                  <Discount>
                    SAVE{" "}
                    {Math.ceil(
                      100 * (1 - product.discountedPrice / product.currentPrice)
                    )}
                    %!
                  </Discount>
                </>
              ) : (
                <CurrentPrice>EGP {product.currentPrice}</CurrentPrice>
              )}
            </ProductPriceSection>
            <ProductDescriptionSection>
              <h4>DESCRIPTION</h4>
              <ProductDescription>
                Milano Large Tote Bag Leather Touch is the iconic bag par
                excellence by D1VER2O. Featuring two different types of leather,
                one of which is rubberised, this bag stands out because of its
                unmistakable straps and handles fully embroidered with the
                D1VER2O Monogram. Fully lined and fitted with an interior
                compartment with zip and a smaller pocket, Milano Large Tote can
                either be carried or worn over the shoulder.
              </ProductDescription>
            </ProductDescriptionSection>
            <AvailableVariantsSection>
              <h4>AVAILABLE VARIANTS</h4>
              <AvailableVariants>
                {product.variants.map((variant, index) => (
                  <Variant
                    image={variant.variantImage}
                    name={variant.color}
                  />
                ))}
              </AvailableVariants>
            </AvailableVariantsSection>
          </ProductSummary>
        </>
      ) : (
        <></>
      )}
    </ProductDetailsContainer>
  );
};

const ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const ProductType = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 4rem;
`;

const ProductName = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  text-transform: uppercase;
  margin: 0;
`;

const ProductSubCategory = styled.text`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0;
`;

const ProductPriceSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  &:nth-child(1) {
    margin-bottom: 1rem;
  }
`;

const CurrentPrice = styled.text`
  color: #666;
  ${(props) =>
    props.strikethrough &&
    css`
      text-decoration: line-through;
    `}
`;

const DiscountedPrice = styled.text`
  color: #ff0000;
  font-weight: bold;
`;

const Discount = styled.text`
  color: #ffbf00;
  font-weight: bold;
  padding-top: 1rem;
`;

const ProductDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  &:nth-child(1) {
    margin-bottom: 1rem;
  }
`;

const AvailableVariantsSection = styled.div`
  display: flex;
  width: 20rem;
  height: 20rem;
  flex-direction: column;
`;

const AvailableVariants = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const ProductDescription = styled.text``;

const ProductSummary = styled.div``;

export default ProductDetails;
