import Image from "next/image";
import { useState, useEffect } from "react";
import { styled, css } from "styled-components";

const ImageSlider = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const isImageSelected = images.includes(selectedImage);

    if (!isImageSelected) {
      setSelectedImage(images[0]);
    }
  }, [images, selectedImage]);

  return (
    <SliderContainer>
      <Images>
        {images.map((img) => (
          <UnSelectedImage
            onClick={() => handleImageClick(img)}
            src={img}
            alt={"alt"}
          ></UnSelectedImage>
        ))}
      </Images>
      <SelectedImage src={selectedImage}></SelectedImage>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SelectedImage = styled.img`
  width: 80%;
  border-radius: 2rem;
`;

const UnSelectedImage = styled.img`
  width: 40%;
  border-radius: 1rem;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-height: 40rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 1rem;
  }
`;

export default ImageSlider;
