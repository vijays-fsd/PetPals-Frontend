import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"; 
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";

const ReviewComponent = () => {
  const { id } = useParams(); 
  const petId = id;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch reviews for the pet
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.get(`/review/${petId}`);
        setReviews(res.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    if (petId) {
      fetchReviews();
    }
  }, [petId]);

  
  const handleAddReview = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post(
        `/review/${petId}`,
        { rating, comment },
        { withCredentials: true }
      );
      setReviews((prevReviews) => [...prevReviews, res.data.review]);
      setRating(5);
      setComment("");
    } catch (error) {
      console.error("Error adding review:", error);
    } finally {
      setLoading(false);
    }
  };

 
  const handleDeleteReview = async (reviewId) => {
    try {
      await api.delete(`/review/${reviewId}`, { withCredentials: true });
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== reviewId)
      );
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="bg-light-gray min-h-screen p-6">
      <h2 className="text-3xl font-bold text-[#B71C1C] mb-4">Reviews</h2>

      {/* Review List */}
      {reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li
              key={review._id}
              className="p-4 bg-pure-white shadow-md rounded-lg"
            >
              <p className="text-lg font-medium text-[#C2185B]">
                <strong>{review.user.username}</strong>: {review.comment}
              </p>
              <p className="text-[#C2185B]">Rating: {review.rating} / 5</p>
              {user && review.user._id === user._id && (
                <button
                  onClick={() => handleDeleteReview(review._id)}
                  className="rounded-md bg-[#B71C1C] px-5 py-2.5 text-sm font-medium text-[#fff] shadow"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[#FF8A80]">No reviews yet.</p>
      )}

      {/* Add Review Form */}
      {user ? (
        <form
          onSubmit={handleAddReview}
          className="mt-6 p-6 bg-pure-white shadow-md rounded-lg"
        >
          <h3 className="text-2xl font-semibold text-[#B71C1C] mb-4">
            Leave a Review
          </h3>
          <label className="block mb-2">
            <span className="text-lg text-[#FF8A80]">Rating:</span>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 mb-2">
            <span className="text-lg text-[#FF8A80]">Comment:</span>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-1 text-[#B71C1C] placeholder-[#FF8A80] bg-[#FFCDD2] border border-[#B71C1C] rounded-md focus:border-[#D32F2F] focus:ring-[#D32F2F] focus:outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full px-4 py-2 bg-[#D32F2F] text-[#fff] font-medium rounded hover:bg-[#B71C1C] disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      ) : (
        <p className="text-muted-red mt-6">
          You must be logged in to leave a review.
        </p>
      )}
    </div>
  );
};

export default ReviewComponent;
