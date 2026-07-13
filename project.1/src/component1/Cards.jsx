import React from 'react'
export default function Cards(props) {
	console.log(props)
	const {name,age,gmail}=props;
	return (
		<div className='box'>
		  <h1 style={{textAlign:'center'}}>Name : {name}</h1>
		  <h2 style={{backgroundColor:'lightgreen', textAlign:'center'}}>Gmail : {gmail}</h2>
		  <h3 style={{ textAlign:'center'}}>Age : {age}</h3>
		</div>
	);
}

 
