 import React,{useState} from 'react'
import DiceFront from './components/DiceFront/DiceFront'
import GamePage from './components/GamePage/GamePage'
 
 
 export default function App() {
  const [currentDice, setCurrentDice] = useState(1);
  const [isGameStarted, setIsGameStarted]=useState(false);
  const toggle=()=>{
	setIsGameStarted((prev)=>!prev);
  }
 
  const roleDice = () => {
  const newDice = Math.floor(Math.random() * 6) + 1;
  setCurrentDice(newDice);
  return newDice;
};
	return (
		<div>
		{isGameStarted?<GamePage currentDice={currentDice} roleDice={roleDice} /> :<DiceFront toggle={toggle}/>}
			 
			
			 
		</div>
	)
 }

 
 
 