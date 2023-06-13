import { useState, useEffect } from 'react'
import './App.css'
import { ViewTable } from './components/ViewTable'
import { Form } from "./compnents/Form"

function App() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    //fetch data
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
  }, [])

  return (
    <>
      <Form />
      <ViewTable transactions={transactions} />
    </>
  )
}

export default App
