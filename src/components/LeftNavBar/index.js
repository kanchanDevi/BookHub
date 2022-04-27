import './index.css'

const LeftNavBar = props => {
  const {filterBookDetails, getFilterBookDetails, isActive} = props
  const {id, label, value} = filterBookDetails
  const selectStatus = isActive && 'selected-status'

  const onClickReadStatus = () => {
    getFilterBookDetails(value, label, id)
  }

  return (
    <li className="bookshelves-list-item">
      <button
        className={`list-item-button-mobile ${selectStatus}`}
        onClick={onClickReadStatus}
        type="button"
      >
        {label}
      </button>
    </li>
  )
}

export default LeftNavBar
