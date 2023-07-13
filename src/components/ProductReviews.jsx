import React from "react";
import { styled, css } from "styled-components";
import StarRatings from "react-star-ratings";

const ProductReviews = ({ reviews }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const formattedDate = d.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formattedDate;
  };
  return (
    <ProductReviewsContainer>
      {reviews.map((review) => (
        <Review>
          <StarRatings
            starDimension={"2rem"}
            starSpacing={"0.1rem"}
            starRatedColor={"orange"}
            rating={review.rating}
            numberOfStars={5}
            name="rating"
          />
          <Reviewer>
            By <span style={{ "padding-right":"0.5rem","padding-left":"0.5rem","border-radius":"0.5rem", color: "white", "background-color":"orange" }}>{review.user.name}</span> <span/>
            
              {formatDate(review.createdAt)}
          </Reviewer>
          {review.comment ? <Comment>{review.comment}</Comment> : <></>}
        </Review>
      ))}
    </ProductReviewsContainer>
  );
};

const ProductReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 35rem;
  max-height:40rem;
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

const Review = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #d0d0d0;
`;

const Reviewer = styled.p`
  border-radius: 1rem;
  color:orange;
`;

const Comment = styled.p``;

export default ProductReviews;
