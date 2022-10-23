import { useState } from 'react'
import './App.css'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Task task={{ id: '1', title: 'Hello' }} />
    </div>
  )
}

export default App
