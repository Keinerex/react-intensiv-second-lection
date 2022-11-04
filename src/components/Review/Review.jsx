export const Review = ({review}) => {
  return <div>
        <div>{review.text}</div>
        <div>{review.rating}</div>
        <div>{review.user.name}</div>
    </div>
}