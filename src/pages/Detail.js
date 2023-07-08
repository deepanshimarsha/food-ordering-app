import { useParams } from "react-router-dom";
import { restaurantsData } from "../db/data";
import { useState } from "react";
import Reviews from "../component/Reviews";
import AddReviewModal from "../component/AddReviewModal";

import { useNavigate } from "react-router-dom";
export default function Detail() {
  const { restaurantId } = useParams();

  const restaurantDetail = restaurantsData.find(
    ({ id }) => id === Number(restaurantId)
  );
  const [reviews, setReviews] = useState(restaurantDetail.ratings);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="back-icon"
        onClick={() => {
          navigate("/");
        }}
      >
        <i class="fa fa-arrow-left"></i>
      </div>

      <div className="detail-main">
        <div className="Detail-header">
          <h1>{restaurantDetail.name}</h1>
          <div className="description">
            <div className="details">
              <div className="menu-name">
                {restaurantDetail.menu.map(({ name, idx }) => {
                  if (idx === restaurantDetail.menu.length - 1) {
                    return <span>{name}</span>;
                  }
                  return <span>{name} , </span>;
                })}
              </div>
              <div>{restaurantDetail.address}</div>
              <div>Average rating : {restaurantDetail.averageRating}</div>
            </div>
            <div className="add-review">
              <AddReviewModal reviews={reviews} setReviews={setReviews} />
            </div>
          </div>
          <div>
            <hr />
          </div>
        </div>
        <div className="review-list">
          <div className="rev-heading">
            <h2>Reviews</h2>
          </div>
          {reviews.map((review) => {
            return <Reviews {...review} />;
          })}
        </div>
      </div>
    </>
  );
}
