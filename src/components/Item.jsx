const Item = ({ item, toggleCompletion, handleClick }) => {
  return (
    <li>
      {item.content} 
      <input type="checkbox" onChange={toggleCompletion} checked={item.completed} />
      <button type="button" onClick={handleClick}>Delete</button>
    </li>
  )
}

export default Item