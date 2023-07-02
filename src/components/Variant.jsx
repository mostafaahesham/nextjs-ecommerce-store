import { styled, css } from "styled-components";

const Variant = ({ image, name }) => {
  return (
    <VariantStyle>
      <img src={image} />
      <p>{name}</p>
    </VariantStyle>
  );
};

const VariantStyle = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 5rem;
    border: 1px solid #808080;
    border-radius: 1rem;
  }
  p {
    text-align: center;
    font-weight: 300;
  }
`;

export default Variant;
