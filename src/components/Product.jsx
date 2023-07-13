import { styled, css } from "styled-components";
import ProductRating from "@/components/ProductRating";
import ProductPrice from "@/components/ProductPrice";

const Product = ({
  name,
  description,
  currentPrice,
  discountedPrice,
  discount,
  image,
  starRating,
  ratingsCount,
  onClick,
}) => {
  return (
    <ProductContainer onClick={onClick}>
      <ImageContainer>
        <ImageStyle src={image} alt={name} />
      </ImageContainer>
      <TitleStyle>{name}</TitleStyle>
      <DescriptionStyle>{description}</DescriptionStyle>
      {ratingsCount ? (
        <ProductRating starRating={starRating} ratingsCount={ratingsCount} />
      ) : (
        <></>
      )}

      <ProductPrice
        currentPrice={currentPrice}
        discountedPrice={discountedPrice}
        discount={discount}
      />
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  max-width: 20rem;
  line-height: 1.1;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const ImageStyle = styled.img`
  width: 20rem;
  border-radius: 20px;
  padding: 10px;
`;

const TitleStyle = styled.text`
  color: #666;
  font-weight: bold;
  // padding-left: 15px;
  word-wrap: break-word;
  grid-area: title;
`;

const DescriptionStyle = styled.text`
  color: #000;
  font-weight: bold;
  // padding-left: 15px;
  word-wrap: break-word;
  grid-area: description;
`;


export default Product;
