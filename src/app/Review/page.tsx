'use client'
import { useState } from 'react';

function ReviewPage() {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([
        {
            name: 'John Doe',
            rating: 4,
            text: "I absolutely love my new furniture from Avion! The design is elegant, and the quality is top-notch. Highly recommend!"
        },
        {
            name: 'Jane Smith',
            rating: 3,
            text: "Avion’s furniture transformed my living room! The comfort and aesthetics are just amazing. Worth every penny!"
        }
    ]);

    const handleStarClick = (index: number) => {
        setRating(index + 1);
    };

    const handleReviewSubmit = () => {
        if (reviewText.trim() === '') {
            alert("Please write a review.");
            return;
        }

        const newReview = {
            name: 'Anonymous', // You can replace this with the logged-in user's name if needed
            rating: rating,
            text: reviewText
        };

        setReviews([newReview, ...reviews]); // Add the new review at the top
        setReviewText(''); // Clear the textarea
        setRating(0); // Reset the rating
    };

    return (
        <div className="bg-[#0D4B8B] rounded text-white py-16 px-6">
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Customer Reviews</h1>
                <p className="text-lg md:text-xl text-gray-100">See what our customers are saying about Avion Furniture.</p>
            </header>

            {/* Review Form Section */}
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-600 mb-6">Leave a Review</h2>
                
                {/* Star Rating */}
                <div className="flex mb-6">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-8 h-8 cursor-pointer ${rating > index ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            onClick={() => handleStarClick(index)}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.176 3.245a1 1 0 0 1-1.45-1.054l1.183-6.798-4.91-4.788a1 1 0 0 1 .56-1.694l6.878-1.006L9.85.67a1 1 0 0 1 1.847 0l3.073 6.229 6.878 1.006a1 1 0 0 1 .56 1.694l-4.91 4.788 1.183 6.798a1 1 0 0 1-1.45 1.054L12 17.25z" />
                        </svg>
                    ))}
                </div>

                {/* Review Text */}
                <textarea
                    rows={4} // Changed from string to number
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write your review..."
                    className="w-full p-4 border border-gray-300 rounded-lg mb-4 bg-gray-100 text-gray-700 focus:outline-none focus:border-[#1A5E91] focus:ring-2 focus:ring-[#1A5E91]"
                ></textarea>

                <div className="text-center">
                    <button
                        className="bg-[#1A5E91] hover:bg-[#0D4B8B] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                        onClick={handleReviewSubmit}
                    >
                        Submit Review
                    </button>
                </div>
            </div>

            {/* Reviews Display Section */}
            <div className="max-w-7xl mx-auto mt-16">
                <h2 className="text-3xl font-semibold text-[#3A7FD5] mb-6">What Our Customers Are Saying</h2>

                {/* Loop through reviews */}
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, starIndex) => (
                                    <svg
                                        key={starIndex}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill={starIndex < review.rating ? 'currentColor' : 'none'}
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.176 3.245a1 1 0 0 1-1.45-1.054l1.183-6.798-4.91-4.788a1 1 0 0 1 .56-1.694l6.878-1.006L9.85.67a1 1 0 0 1 1.847 0l3.073 6.229 6.878 1.006a1 1 0 0 1 .56 1.694l-4.91 4.788 1.183 6.798a1 1 0 0 1-1.45 1.054L12 17.25z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 ml-4">{review.name}</p>
                        </div>
                        <p className="text-gray-600">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewPage;
