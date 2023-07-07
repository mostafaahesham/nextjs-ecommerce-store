import { styled, css } from "styled-components";

const ProductPrice = ({ currentPrice, discountedPrice, discount }) => {
  return (
    <ProductPriceStyle>
      <h4>PRICE</h4>
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
  display: grid;
  grid-template-columns: fit-content(40%);
  h4{
    margin-bottom:-1rem;
  }
  flex:1
`;

const CurrentPrice = styled.p`
  grid-row: 1 / 3;
  color: #666;
  font-size: 1.5rem;
  ${(props) =>
    props.discount &&
    css`
      text-decoration: line-through;
      align-self: end;
      font-size: 1rem;
    `}
`;

const DiscountedPrice = styled.p`
  grid-row: 2 / 3;
  color: #fe1b53;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Discount = styled.p`
  grid-row: 3 / 3;
  color: #ffbf00;
  font-weight: bold;
  align-self: self-start;
  margin-top:-1rem;
`;

export default ProductPrice;
