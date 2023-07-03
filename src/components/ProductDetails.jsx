"use client";

import { styled, css } from "styled-components";
import ImageGrid from "./ImagesGrid";
import Variant from "./Variant";
import Product from "./Product";
import Axios from "axios";
import { useState, useEffect } from "react";

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
  const [product, setProduct] = useState("");
  const [relatedProducts, setRelatedProducts] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await Axios.get(
          "https://e-shop-app-gf69.onrender.com/api/v1/products/647b4f36396ebb38fe9b68e1"
        );
        console.log(productResponse.data.data);
        setProduct(productResponse.data.data);
        setSubCategoryId(productResponse.data.data.subCategory._id);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (subCategoryId) {
        try {
          const relatedProductsResponse = await Axios.get(
            `https://e-shop-app-gf69.onrender.com/api/v1/subcategories/${subCategoryId}/products?limit=100&rand=5`
          );
          console.log(relatedProductsResponse.data.data);
          setRelatedProducts(relatedProductsResponse.data.data);
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      }
    };

    fetchRelatedProducts();
  }, [subCategoryId]);
  return (
    <PageContainer>
      <ProductDetailsContainer>
        {product ? (
          <>
            <ImageGrid images={product.variants[0].variantImages} />
            <ProductSummary>
              <ProductType>
                {product.category.name} / {product.subCategory.name} /{" "}
                {product.name}
              </ProductType>
              <ProductName>{product.name}</ProductName>
              <ProductSubCategory>
                {product.subCategory.name}
              </ProductSubCategory>
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
                        100 *
                          (1 - product.discountedPrice / product.currentPrice)
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
                  excellence by D1VER2O. Featuring two different types of
                  leather, one of which is rubberised, this bag stands out
                  because of its unmistakable straps and handles fully
                  embroidered with the D1VER2O Monogram. Fully lined and fitted
                  with an interior compartment with zip and a smaller pocket,
                  Milano Large Tote can either be carried or worn over the
                  shoulder.
                </ProductDescription>
              </ProductDescriptionSection>
              <AvailableVariantsSection>
                <h4>AVAILABLE VARIANTS</h4>
                <AvailableVariants>
                  {product.variants.map((variant) => {
                    <Variant
                      image={variant.variantImage}
                      name={variant.color}
                    />;
                  })}
                  a7a
                </AvailableVariants>
              </AvailableVariantsSection>
            </ProductSummary>
          </>
        ) : (
          <></>
        )}
      </ProductDetailsContainer>
      <h2>RELATED PRODUCTS</h2>
      <RelatedProductContainer>
      {relatedProducts
        ? relatedProducts.map((product) => (
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
        </RelatedProductContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

const ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: 0.4fr;
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
  width: auto;
  height: 10rem;
  flex-direction: column;
`;

const AvailableVariants = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const ProductDescription = styled.text``;

const ProductSummary = styled.div``;

const RelatedProductContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ProductDetails;
