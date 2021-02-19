import React, {useState} from 'react'

function CounterHooks() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const incrementCountTen = () => {
    setCount(prevCount => prevCount + 10)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+ 1</button>
      <button onClick={incrementCountTen}>+ 10</button>
    </div>
  )
}

export default CounterHooks
