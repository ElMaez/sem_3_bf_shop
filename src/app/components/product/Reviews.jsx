import { FaStar, FaRegStar } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500">Ingen anmeldelser endnu.</p>;
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={`full-${i}`} className="text-[#A49C96]" />);
      } else {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-[#A49C96]" />);
      }
    }
    return stars;
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Reviews <FaRegStar className="text-black inline-block" />
      </h2>

      <div className="flex flex-row overflow-x-auto gap-4 py-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 w-64 shrink-0"
          >
            <h3 className="text-[#A49C96] text-lg">{review.reviewerName}</h3>
            <p className="text-[#A49C96] text-md italic mb-2">
              {review.comment}
            </p>
            <div className="flex items-center">
              {renderStars(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
