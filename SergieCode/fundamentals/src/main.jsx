import React from 'react'
import ReactDOM from 'react-dom/client'
import { Counter } from './Counter'
import { List } from './List'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter startAt = {500}/>
    <List/>
  </React.StrictMode>,
)
