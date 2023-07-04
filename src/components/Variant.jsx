import { styled, css } from "styled-components";

const Variant = ({ image, name , onClick}) => {
  return (
    <VariantStyle onClick={onClick}>
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
      padding-left:1rem;
      padding-right:1rem;
    }
    width: 5rem;
  }
  p {
    text-align: center;
    font-weight: 300;
  }
`;

export default Variant;
