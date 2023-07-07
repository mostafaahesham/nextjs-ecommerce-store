import { styled, css } from "styled-components";

const Size = ({ name, availability }) => {
  return availability ? (
    <SizeStyle>
      <SizeName>{name}</SizeName>
    </SizeStyle>
  ) : (
    <SizeStyle unAvailable>
      <SizeName>{name}</SizeName>
    </SizeStyle>
  );
};

const SizeName = styled.p`
  height: 3rem;
  border: 2px solid #d0d0d0;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SizeStyle = styled.div`
  ${(props) =>
    props.unAvailable &&
    css`
        color: #b0b0b0;
        pointer-events: none;
    `}

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  transition: top ease 0.2s;

  &:hover {
    cursor: pointer;
    top: -1rem;
  }
`;

export default Size;
