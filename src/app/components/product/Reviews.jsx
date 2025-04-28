const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>Ingen anmeldelser endnu.</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.reviewerName}</h3>
            <p>{review.comment}</p>
            {review.rating && <p>{review.rating}/5</p>}
            {/* review.rating skal ændres til stjerner */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
