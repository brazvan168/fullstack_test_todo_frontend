const Item = ({ item, index, toggleCompletion, handleClick }) => {
  return (
    <li className="list-item">
      <span>
        {(index + 1) + '. ' + item.content} 
      </span>
      <div className="list-item-actions">
        <label className="checkbox-container">
          <input type="checkbox" onChange={toggleCompletion} checked={item.completed} />
          <span className="checkmark"></span>
        </label>
        <button type="button" onClick={handleClick}>Delete</button>
      </div>
    </li>
  )
}

export default Item