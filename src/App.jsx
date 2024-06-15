import { useState } from 'react'
import TextInput from './components/TextInput'
import Button from './components/Button'
import ItemList from './components/ItemList'
import './index.css'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (event) => {
    event.preventDefault()

    if(!event.target.item.value) {
      return false;
    }

    const itemObject = {
      content: event.target.item.value,
      completed: false,
      id: !items.length ? 1 : Math.max(...items.map(item => item.id)) + 1,
    }
  
    setItems(items.concat(itemObject))
    event.target.item.value = ''
  }

  return (
    <div id="main-container">
      <h1>To Do List</h1>
      {
        !items.length ? (
          <p id="no-items">There are no items</p>
        ) : (
          <ItemList
            items={items}
            setItems={setItems}
          />
        )
      }
      <form onSubmit={addItem} id="main-form">
        <TextInput name="item" />
        <Button type="submit" text="Save"/>
      </form> 
    </div>
  )
}

export default App