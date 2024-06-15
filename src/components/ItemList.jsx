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
    <ul>
      {items.map(item => 
        <Item
          key={item.id}
          item={item}
          toggleCompletion={() => toggleCompletionOf(item.id)}
          handleClick={() => deleteItem(item.id)}
        />
      )}
    </ul>
  )
}

export default ItemList