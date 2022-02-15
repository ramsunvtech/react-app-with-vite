import { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to React App using Vite</h2> <br />
      Count: {count}<br />
      <input type="button" value="Increment" onClick={() => {
        setCount(count + 1)
      }} />
    </>
  )
}

export default App