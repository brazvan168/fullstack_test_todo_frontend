import { useState, useEffect  } from 'react'
import TextInput from './components/TextInput'
import Button from './components/Button'
import ItemList from './components/ItemList'
import './index.css'
import itemService from './services/items'

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    itemService
      .getAll()
      .then(initialItems => {
        setItems(initialItems)
      })
      .catch(error => {
        console.log('getAll fail', error)
      })
  }, [])

  const addItem = (event) => {
    event.preventDefault()

    if(!event.target.item.value) {
      return false;
    }

    const itemObject = {
      content: event.target.item.value,
      completed: false
    }

    itemService
      .create(itemObject)
      .then(returnedItem => {
        setItems(items.concat(returnedItem))
        event.target.item.value = ''
      })
      .catch(error => {
        console.log('create fail', error)
      })
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