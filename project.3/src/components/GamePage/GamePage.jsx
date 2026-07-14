import ShowRules from "../showRules/ShowRules";
import styles from "./GamePage.module.css";
import {useState} from 'react'

const GamePage=({roleDice, currentDice})=> {
	
	const[status,setStatus]=useState(false);
	 const [activeIndex, setActiveIndex] = useState(null);
    const [diceClickCount, setDiceClickCount] = useState(0);
	  const [score, setScore] = useState(0);
   const handleClick = (index) => {
    if (activeIndex === null) {
      setActiveIndex(index);
    }
  };
  const handleDiceClick = () => {
  const newDice = roleDice(); // get the new dice value directly

  const newCount = diceClickCount + 1;
  setDiceClickCount(newCount);

  if (activeIndex !== null) {
    const selectedNumber = activeIndex + 1; // Convert 0-based index to 1-based number
    if (selectedNumber === newDice) {
     const right= score + 2;
	 setScore(right)
	 console.log(right); // correct
    } else {
      const wrong = score-2; 
	  setScore(wrong);
    }
	 
  }

  if (newCount === 7) {
    setActiveIndex(null);
    setDiceClickCount(0);
  }
};

  const handleReset = () => {
    setActiveIndex(null);
    setDiceClickCount(0);
    roleDice(); 
	setScore(0);
  };

	return (<div> 
		<div className={styles.gamePage}>
			<div style={{width:'135px',height:'151px' , display:'flex',alignItems:'center',justifyContent:"center"}} ><h1 style={{width:'62px',height:'112px',fontWeight:500,fontSize:"100px",lineHeight:'100%'}}>{score}</h1>
		<h1 style={{position:'absolute' ,bottom:'0px',width:'135px',height:'36px' ,fontWeight:'500',fontSize:'24px'}}>Total Score</h1>
	</div>
			<div className={styles.gameScore}>

			{[1, 2, 3, 4, 5, 6].map((num, index) => (<div
          key={index}
          className={`${styles.box} ${activeIndex === index ? styles.gameScore2 : ''}`}
          onClick={() => handleClick(index)} >
          {num}
        </div>
      ))}
			</div>
			<span>Select Number</span> 

			<div className={styles.rolling}>
			<div onClick={handleDiceClick} className={styles.rollingDice} >
				<img src={`/images/dice_${currentDice}.png`} alt="Dice image"/>
				<h1>Click on Dice To roll</h1>
			</div>


			<div className={styles.Button}>
				<button onClick={handleReset}>Rest game</button>
				<button onClick={()=>setStatus(!status)} style={{backgroundColor:"black" ,color:'white',marginTop:"15px"}}>Show Rules</button>
			</div>
			</div>
			 
		</div>
		{status ? <ShowRules/> : null}
		</div>
		 
	)
}

export default GamePage
