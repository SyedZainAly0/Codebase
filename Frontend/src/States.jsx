// import { useState } from 'react';

// function States() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h3>This is for useState</h3>
//       <h3>{count}</h3>
//       <button onClick={() => setCount(prev => prev + 1)}>
//         Click
//       </button>
//        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// }

// export default States;



import { useState } from "react";

function States() {
  const [name, setName] = useState("Unknown");
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setName(input)}>Click</button>

      <p>{name}</p>
    </>
  );
}

export default States;