import { useState } from 'react'




function  App(initialValue) {
  let [count,setCount] = useState(0);



  const increment = () => {
    if(count<20){
    setCount(count + 1);
    }
    
    
  };

  const decrement = () => {
    if(count!=0){
    setCount(count - 1);
    }
  };

  return (
    <>
    <div className="text-center mt-8">
      <p className="text-3xl font-semibold mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
    </>
  )
}

export default App;
