import { useState } from 'react'
import TextInput from './components/TextInput'
import Button from './components/Button'
import ItemList from './components/ItemList'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (event) => {
    event.preventDefault()

    const itemObject = {
      content: event.target.item.value,
      completed: false,
      id: items.length + 1,
    }
  
    setItems(items.concat(itemObject))
    event.target.item.value = ''
  }

  return (
    <div>
      <h1>To Do List</h1>
      {
        !items.length ? (
          <p>There are no items</p>
        ) : (
          <ItemList
            items={items}
            setItems={setItems}
          />
        )
      }
      <form onSubmit={addItem}>
        <TextInput name="item" />
        <Button type="submit" text="Save"/>
      </form> 
    </div>
  )
}

export default App