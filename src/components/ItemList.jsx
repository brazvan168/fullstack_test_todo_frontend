import Item from './Item'

const ItemList = ({ items, setItems }) => {

  const toggleCompletionOf = (id) => {
    const item = items.find(n => n.id === id)
    const changedItem = { ...item, completed: !item.completed }

    setItems(items.map(i => i.id !== id ? i : changedItem))
  }

  const deleteItem = (id) => {
    setItems(items.filter(i => i.id !== id))
  }

  return (
    <ul className="item-list">
      {items.map((item, index) => 
        <Item
          key={item.id}
          index={index}
          item={item}
          toggleCompletion={() => toggleCompletionOf(item.id)}
          handleClick={() => deleteItem(item.id)}
        />
      )}
    </ul>
  )
}

export default ItemList