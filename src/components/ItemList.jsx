import Item from './Item'
import itemService from '../services/items'

const ItemList = ({ items, setItems }) => {

  const toggleCompletionOf = (id) => {
    const item = items.find(n => n.id === id)
    const changedItem = { ...item, completed: !item.completed }

    itemService
      .update(id, changedItem)
      .then(returnedItem => {
        setItems(items.map(i => i.id !== id ? i : returnedItem))
      })
      .catch(error => {
        console.log('update fail', error)
      })
  }

  const deleteItem = (id) => {
    itemService
      .remove(id)
      .then(() => {
        setItems(items.filter(i => i.id !== id))
      })
      .catch(error => {
        console.log('remove fail', error)
      })
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