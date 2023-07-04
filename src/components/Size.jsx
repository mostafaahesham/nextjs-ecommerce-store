import { styled, css } from "styled-components";

const Size = ({name}) => {
  return (
    <SizeStyle>
      <p>{name}</p>
    </SizeStyle>
  );
};

const SizeStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Size;
