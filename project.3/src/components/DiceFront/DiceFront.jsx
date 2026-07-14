import styles from "./DiceFront.module.css";
const DiceFront=({toggle})=> {
	 
	return (
		<div className={styles.DiceFront}>
		<img src='/images/dices.png'/>
		<div className='textBox'>
			<div style={{width:"528px",height:"144px"}}><h1>DICE GAME</h1></div>
			<button onClick={toggle}>Play Now</button>
		</div>
		</div>
	)
}

export default DiceFront
