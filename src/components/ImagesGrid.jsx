import { styled, css } from "styled-components";

const ImagesGrid = ({ images }) => {
  return (
    <ImagesGridStyle>
      {images.map((image) => (
        <ImageStyle src={image} alt={"alt"} />
      ))}
    </ImagesGridStyle>
  );
};

const ImagesGridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 1rem;
  max-height: 100%;
  overflow-y: scroll;
`;

const ImageStyle = styled.img`
  width: 100%;
`;

export default ImagesGrid;
