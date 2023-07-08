"use client";

import { styled, css } from "styled-components";
import ImageGrid from "./ImagesGrid";
import ImageSlider from "./ImageSlider";
import Variant from "./Variant";
import Product from "./Product";
import Size from "@/components/Size";
import ProductPrice from "@/components/ProductPrice";
import ProductRating from "@/components/ProductRating";
import AddToCart from "@/components/AddToCart";
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
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const [variantIndex, setVariantIndex] = useState(0);

  const handleClick = (index) => setVariantIndex(index);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productResponse = await Axios.get(
          "https://e-shop-app-gf69.onrender.com/api/v1/products/64a6801eecbff03b0a2c32ab"
        );
        console.log(productResponse.data.data);
        setProduct(productResponse.data.data);
        setSubCategoryId(productResponse.data.data.subCategory._id);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
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
    <BodyContainer>
      {product ? (
        <>
          <ProductContainer>
            <ImageSlider images={product.variants[variantIndex].variantImages} />
            <ProductDetail>
              <ProductSummary>
                <ProductType>
                  {product.category.name} / {product.subCategory.name} /{" "}
                  {product.name}
                </ProductType>
                <ProductName>{product.name}</ProductName>
                <ProductSubCategory>
                  {product.subCategory.name}
                </ProductSubCategory>
              </ProductSummary>
              <h4>PRICE</h4>
              <ProductRatingAndPrice>
                <ProductPrice
                  style={{ flex: 1 }}
                  currentPrice={product.currentPrice}
                  discountedPrice={product.discountedPrice}
                  discount={product.discount}
                />
                <ProductRating
                  style={{ flex: 1 }}
                  starRating={product.ratingsAverage}
                  ratingsCount={product.ratingsCount}
                />
              </ProductRatingAndPrice>
              <AvailableVariants>
                <h4>AVAILABLE VARIANTS</h4>
                <Variants>
                  {product.variants.map((variant, index) => (
                    <Variant
                      onClick={() => handleClick(index)}
                      key={variant.id}
                      image={variant.variantImage}
                      name={variant.color}
                    />
                  ))}
                </Variants>
              </AvailableVariants>
              <SizesAndCart>
                <AvailableSizes>
                  <h4>AVAILABLE SIZES</h4>
                  <Sizes>
                    {product.variants[variantIndex].sizes.map((size) => (
                      <Size name={size.name} availability={size.availability} />
                    ))}
                  </Sizes>
                </AvailableSizes>
                <AddToCart />
              </SizesAndCart>
              <ProductDescription>
                <h4>DESCRIPTION</h4>
                <Description>
                  Milano Large Tote Bag Leather Touch is the iconic bag par
                  excellence by D1VER2O. Featuring two different types of
                  leather, one of which is rubberised, this bag stands out
                  because of its unmistakable straps and handles fully
                  embroidered with the D1VER2O Monogram. Fully lined and fitted
                  with an interior compartment with zip and a smaller pocket,
                  Milano Large Tote can either be carried or worn over the
                  shoulder.
                </Description>
              </ProductDescription>
            </ProductDetail>
          </ProductContainer>
        </>
      ) : (
        <></>
      )}
      <h2>RELATED PRODUCTS</h2>
      <RelatedProducts>
        {relatedProducts ? (
          relatedProducts.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              currentPrice={product.currentPrice}
              discountedPrice={product.discountedPrice}
              discount={product.discount}
              starRating={product.ratingsAverage}
              ratingsCount={product.ratingsCount}
              image={product.variants[0].variantImage}
            />
          ))
        ) : (
          <></>
        )}
      </RelatedProducts>
    </BodyContainer>
  );
};

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  gap: 2rem;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2rem;
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 1rem;
`;

//-------------------------------------------//
// Product Summary Container
const ProductSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

// Product Summary Elements
const ProductType = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;

const ProductName = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  text-transform: uppercase;
  margin: 0;
`;

const ProductSubCategory = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  margin-top: -0.5rem;
`;
//-------------------------------------------//

const ProductRatingAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

//-------------------------------------------//

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(1) {
    // margin-bottom: 1rem;
  }
`;

const AvailableVariants = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const Variants = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const AvailableSizes = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const Sizes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const SizesAndCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Description = styled.p``;

const RelatedProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

export default ProductDetails;
