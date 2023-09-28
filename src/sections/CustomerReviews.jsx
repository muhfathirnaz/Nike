import ReviewsCard from "../components/ReviewsCard"
import { reviews } from '../constants'


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our <span className="text-coral-red"> Customers</span> Say?</h3>
      <p className="info-text text-center mt-4 m-auto max-w-lg">
        hear genuine stories from our satisfied customers about their exceptional expriences with us
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewsCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews