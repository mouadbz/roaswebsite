import { FaStar } from 'react-icons/fa'

export const RatingStars = ({ rating, ratingColor, ratingEmptyColor }) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} className={ratingColor} />)
    } else {
      stars.push(<FaStar key={i} className={ratingEmptyColor} />)
    }
  }
  return <div className="flex gap-0.5">{stars}</div>
}
