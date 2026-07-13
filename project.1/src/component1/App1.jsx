 import './App.css'
//  import Cards from "../cards"
// import userData from "./DataDetails"
// function MyApp() {
 
//   return (
//     <>
//       {
//         userData.map((user,index)=>
//         <Cards 
//         key={index}
//         name={user.name}
//         age={user.age}
//         gmail={user.gmail}/>
//         )
//         }
//     </>
//   );
// }

//  export default MyApp
// import React ,{useState} from "react";
// function App() {
//   const[inputValue ,setInputValue]=useState("");
//   const[inputValueShow ,setInputValueHide]=useState(false);
//    const handleChange=(event)=>{
//    console.log(event.target.value);
//    setInputValue(event.target.value);
//    setInputValueHide(false); 
//    }
//   return (
//     <>
//       <h1>{inputValueShow?inputValue:''}</h1>
//       <input type='text' onChange={handleChange}></input>
//       <button onClick={()=>setInputValueHide(true)}>Submit</button>
//     </>
    
//   )
// }

// export default App
// import React ,{useState} from 'react'
// function App() {
//   const[inputValue,setInputValue]=useState('');
//   const[inputValueShow,setInputValueHide]=useState(false);
//   const handleChange =(event)=>{
//     console.log(event.target.value);
//     setInputValue(event.target.value);
//     setInputValueHide(false);
//   }
//   return (
//     <>
//       {/* <h1>{inputValue}</h1> */}
//       <h1>{inputValueShow?inputValue:''}</h1>
//       <input type='text' onChange={handleChange}></input>
//       <button onClick={()=>setInputValueHide(true)}>Submit</button>
//     </>
//   )
// }

// export default App
import React,{useState} from 'react'

function App() {
  const [status,setStatus]=useState(true);
  return (
    <div className='box'>
    <h1>Hide , show & toggle</h1>
    {status? <div className='Container'>Content</div>:null}
    <button onClick={()=>setStatus(true)}>Show</button>
    <button onClick={()=>setStatus(false)}>Hide</button>
    <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default App

// import React from 'react'
// import FormHandling from './FormHandling'

// function App() {
//   return (
//     <>
//       <FormHandling></FormHandling>
//     </>
//   )
// }

// export default App





