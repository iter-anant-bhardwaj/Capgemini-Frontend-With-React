import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux';
import CounterComponent from './CounterComponent';
import { store2 } from './feature/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store2}>
        <CounterComponent/>
      </Provider>
    </>
  )
}

export default App
