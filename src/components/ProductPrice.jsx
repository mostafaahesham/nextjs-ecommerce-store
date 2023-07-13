import { styled, css } from "styled-components";

const ProductPrice = ({ currentPrice, discountedPrice, discount, scale }) => {
  return (
    <ProductPriceStyle scale={scale}>
      {discountedPrice ? (
        <>
          <DiscountedPrice>EGP {discountedPrice}</DiscountedPrice>
          <CurrentPrice discount>EGP {currentPrice}</CurrentPrice>
          <Discount>
            SAVE {discount}
            %!
          </Discount>
        </>
      ) : (
        <CurrentPrice>EGP {currentPrice}</CurrentPrice>
      )}
    </ProductPriceStyle>
  );
};

const ProductPriceStyle = styled.div`
  transform: scale(${(props) => props.scale});
  display: flex;
  flex-direction:column;
  h4 {
    margin-bottom: -1rem;
  }
  flex: 1;
`;

const CurrentPrice = styled.p`
  color: #666;
  font-size: 1.5rem;
  ${(props) =>
    props.discount &&
    css`
      text-decoration: line-through;
      font-size: 1rem;
      margin-top: -0.5rem;
    `}
`;

const DiscountedPrice = styled.p`
  color: #fe1b53;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Discount = styled.p`
  color: #228B22;
  font-weight: bold;
  margin-top: -1rem;
`;

export default ProductPrice;
