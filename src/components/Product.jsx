import { styled, css } from "styled-components";

const Product = ({
  name,
  description,
  oldPrice,
  newPrice,
  image,
  brandImage,
  brandName,
  onClick,
}) => {
  return (
    <ProductContainer onClick={onClick}>
      <ImageContainer>
        <ImageStyle src={image} alt={name} />
      </ImageContainer>
      <DetailsContainerStyle>
        <TitleStyle>{name}</TitleStyle>
        <DescriptionStyle>{description}</DescriptionStyle>

        {newPrice ? (
          <>
            <OldPriceStyle strikethrough>EGP {oldPrice}</OldPriceStyle>
            <NewPriceStyle> EGP {newPrice}</NewPriceStyle>
            <DiscountStyle>
              Save {Math.ceil(100 * (1 - newPrice / oldPrice))}%
            </DiscountStyle>
          </>
        ) : (
          <OldPriceStyle>EGP {oldPrice}</OldPriceStyle>
        )}
        <BrandImageStyle title={brandName} src={brandImage} alt={brandName} />
      </DetailsContainerStyle>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  max-width: 20rem;
  line-height: 1.1;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    padding-left:1rem;
    padding-right:1rem;
  }
`;

const DetailsContainerStyle = styled.div`
  font-family: Gill Sans, Gill Sans MT, Calibri, sans-serif;
  display: grid;
  grid-template-areas:
    "title title"
    "description description"
    "oldPrice brandImage"
    "newPrice brandImage"
    "discount brandImage";
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
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  word-wrap: break-word;
  grid-area: title;
`;

const DescriptionStyle = styled.text`
  color: #000;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  word-wrap: break-word;
  grid-area: description;
`;

const OldPriceStyle = styled.text`
  color: #666;
  ${(props) =>
    props.strikethrough &&
    css`
      text-decoration: line-through;
    `}
  padding-left: 15px;
  grid-area: oldPrice;
`;

const NewPriceStyle = styled.text`
  color: #ff0000;
  padding-left: 15px;
  font-weight: bold;
  grid-area: newPrice;
`;

const DiscountStyle = styled.text`
  color: #ffbf00;
  font-weight: bold;
  padding-left: 15px;
  grid-area: discount;
  padding-top: 15px;
`;

const BrandImageStyle = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  grid-area: brandImage;
  transition: all 0.1s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export default Product;
