// import { useState, useEffect} from "react";

// // conditional rendering 
// function App() {
//   let [counterVisible, setCounterVisible] = useState (true);
  

//   useEffect(function(){
//     setInterval(function(){
//       setCounterVisible(c => !c)
//     }, 5000);
//   }, [])

//   return <div>
//     hi
//    {counterVisible && <Counter></Counter>}
//     hello
//   </div>
// }  

// // }
// // useState
// // function Counter(){
// //   const [count, setCount] = useState(0);

// //   function increaseCount(){
// //     setCount(count + 1);

// //   } 

// //   function decreaseCount(){
// //     setCount(count - 1);

// //   }

// //   return <div>
// //     <h1 id="text">{count} </h1>
// //     <buttton onClick={increaseCount}>Increase count</buttton>
// //     <buttton onClick={decreaseCount}>Decrease count</buttton>
// //   </div>
// // }

// // setInterval
// // mounting, re-rendering, unmounting
//   function Counter(){
//     const [count, setCount]= useState(0);

//   //hooking into the lifecycle events of react
//     console.log("counter");
    
//   // guard our setInterval from re-renders 
//   // clear interval 
//   useEffect (function(){
//     console.log("on mount");
//     let clock = setInterval(function (){
//       console.log("from inside setInterval");
//       setCount(c => c + 1)
//     },1000);

    
//     return function() {
//     console.log("on unmount");
//      clearInterval(clock)
//     }
//   }, []);  /* dependency array, cleanup, fetch inside useEffect */   

//   function increaseCount(){
//     setCount(count + 1);
//   }

//   return <div>
//      <h1 id="text">{ count} </h1>
//      <button onClick={increaseCount}> Increase count</button>
//    </div>
//   }
  
// export default App

import {useState, useEffect} from "react";

// useEffect, dependency arrays, cleanups
export default function App() {
 const [count , setCount]= useState(0);
 const [count2 , setCount2]= useState(0);

  function increase() {
    setCount(c=> c + 1);
  }

  function decrease() {
    setCount2(c=> c + 1);
  }
  
  return <div>
  <Counter count= {count} count2= {count2} />
   <button onClick={increase}> Home </button>
   <button onClick={decrease}> Notifications </button>
  </div>
} 

// mounting, re-rendering, unmounting
function Counter(props) {
  useEffect(function() {
    console.log("mount");

    return function() {
      console.log("unmount");
    }
  }, []);

  useEffect(function() {
    console.log("count has changed");

    return function() {
      console.log("cleanup inside second effect");
    }
  }, [props.count ]);

  return <div>
    counter1 {props.count} <br />
    counter2 {props.count2} <br />
  </div>
}
