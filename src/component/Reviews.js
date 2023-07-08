export default function Reviews(review) {
  return (
    <div className="review">
      <div className="rev-header">
        <div className="rev-profile">
          <div className="rev-image">
            <img src={review.pp} alt="rev-pic" />
          </div>
          <div className="rev-name">{review.revName}</div>
        </div>
        <div className="rev-rating">{review.rating} ☆</div>
      </div>
      <div className="rev-comment">
        <span>{review.comment}</span>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
