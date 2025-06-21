import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/**
 * weiRD stuff Happeningsg he re can YOU believe me WHATTTT sd
 * */
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="py-20 flex flex-col items-center w-full gap-6">
      <div className="flex gap-2">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
