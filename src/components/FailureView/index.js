import './index.css'

const FailureView = props => {
  const {onClickTryAgin} = props

  const onClickTry = () => {
    onClickTryAgin()
  }

  return (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/saikrishnaboga-ccbp-tech/image/upload/v1643992995/Book-Hub%20/Group_7522failureView_xgsn7l.png"
        alt="failure view"
        className="book-item-failure-image"
      />
      <p className="book-item-failure-message">
        Something went wrong. Please try again
      </p>
      <button type="button" className="try-again-button" onClick={onClickTry}>
        Try Again
      </button>
    </div>
  )
}

export default FailureView
