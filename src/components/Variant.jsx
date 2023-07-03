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
    transition: all 0.2s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
    width: 5rem;
  }
  p {
    text-align: center;
    font-weight: 300;
  }
`;

export default Variant;
