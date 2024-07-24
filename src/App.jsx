import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    if (count >= 1) {
      setCount(prevCount => prevCount -1)
    }
  }
  function reset() {
    setCount(prevCount => prevCount = 0)
  }

  function hide() {
    setVisible(!visible)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
      {visible && <div className="text-3xl h-40 w-40 text-gray-700">
        Count: {count}
      </div>}
      <div className="flex gap-10">
        <button
          className="h-20 w-20 text-3xl text-white bg-blue-500 rounded"
          onClick={increment}
        >
          +
        </button>
        <button
          className="h-20 w-20 text-3xl text-white bg-red-500 rounded"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="h-20 w-20 text-white bg-red-500 rounded" onClick={reset}
        >
          Reset
        </button>
        <button
          className="h-20 w-20 text-white bg-red-500 rounded" onClick={hide}
        >
         {visible ? "Hide":"Display"}
        </button>
      </div>
    </div>
  );
}

