import {withRouter} from 'react-router-dom'
import {BsFillStarFill, BsFillHeartFill} from 'react-icons/bs'
import FavoriteContext from '../../Context/FavoriteContext'

import './index.css'

const BookItem = props => {
  const onClickBookItem = () => {
    const {bookDetails} = props
    const {id} = bookDetails
    const {history} = props
    history.push(`/books/${id}`)
  }
  const {bookDetails} = props
  const {id, title, readStatus, rating, authorName, coverPic} = bookDetails

  return (
    <FavoriteContext.Consumer>
      {value => {
        const {onToggleFavorite, favoriteList} = value
        const isChecked = favoriteList.find(eachItem => eachItem.id === id)

        const onChangeFavorite = () => {
          onToggleFavorite(bookDetails)
        }
        return (
          <li className="book-item-list-container">
            <div className="book-item-btn">
              <button
                className="book-item-btn"
                onClick={onClickBookItem}
                type="button"
              >
                <img
                  className="book-item-cover-pic"
                  src={coverPic}
                  alt={title}
                />
              </button>
            </div>
            <div className="book-item-details-card-container">
              <h1 className="book-item-title">{title}</h1>
              <p className="book-item-author-name">{authorName}</p>
              <div className="book-item-avg-rating-container">
                <p className="book-item-avg-rating">Avg Rating</p>
                <BsFillStarFill className="book-item-start-icon" />
                <p className="book-item-rating">{rating}</p>
              </div>
              <p className="book-item-status-heading">
                Status: <span className="book-item-status">{readStatus}</span>
              </p>
              <input
                className="favorite-input"
                onChange={onChangeFavorite}
                id={id}
                isChecked={isChecked}
                type="checkBox"
              />
              <label htmlFor={id}>
                <div className="favorite-container">
                  <p className="book-item-status-heading">MyFavorite</p>
                  {isChecked ? (
                    <BsFillHeartFill className="favorite-icon-selected" />
                  ) : (
                    <BsFillHeartFill className="favorite-icon" />
                  )}
                </div>
              </label>
            </div>
          </li>
        )
      }}
    </FavoriteContext.Consumer>
  )
}

export default withRouter(BookItem)
