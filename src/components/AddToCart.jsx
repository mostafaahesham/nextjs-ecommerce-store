import { styled, css } from "styled-components";
import Counter from "@/components/Counter";

const AddToCart = () => {
  return (
    <AddToCartStyle>
      <Row>
        <Counter />
        <TotalPrice>Total: EGP {5000}</TotalPrice>
      </Row>
      <Row>
        <Button>Add To Cart</Button>
      </Row>
    </AddToCartStyle>
  );
};

const AddToCartStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items:center;
`;

const TotalPrice = styled.p`
  color: #666;
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  width: 20rem;
  height: 4rem;
  border-radius:1rem;
  &:hover {
    cursor: pointer;
    top: -1rem;
    background-color: #303030;
  }
`;

export default AddToCart;
