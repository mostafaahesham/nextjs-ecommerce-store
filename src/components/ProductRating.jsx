import { styled, css } from "styled-components";
import StarRatings from "react-star-ratings";

const ProductRating = ({ starRating, ratingsCount, scale, onClick }) => {
  return (
    <ProductRatingStyle scale={scale}>
      {ratingsCount ? (
        <>
          <StarRatingContainer>
            <StarRatings
              starDimension={"2rem"}
              starSpacing={"0.1rem"}
              rating={starRating}
              starRatedColor={"orange"}
              numberOfStars={5}
              name="rating"
            />
            <RatingValue>{starRating}</RatingValue>
          </StarRatingContainer>
          <AllRatings onClick={onClick} >click to see all {ratingsCount} review(s)</AllRatings>
        </>
      ) : (
        <h4>No Ratings Yet</h4>
      )}
    </ProductRatingStyle>
  );
};

const ProductRatingStyle = styled.div`
  transform: scale(${(props) => props.scale});
  display: grid;
  grid-template-columns: fit-content(100%);
  flex: 1;
  h4{
    color:orange;
  }
`;

const StarRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RatingValue = styled.p`
  grid-column: 2 / 2;
  margin-left: 1rem;
  font-size: 1.5rem;
`;
const AllRatings = styled.p`
  font-style: italic;
  color: #808080;
  margin-top: -0.5rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default ProductRating;
