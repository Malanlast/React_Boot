import React from 'react'

const Heros=()=> {
	return (
		<div className='MainFrame'>
			<div className='Frame1'>
			<div id='contentH'> 
				<h1 className='TypeH1'>YOUR FEET DESERVE THE BEST</h1>
				<p className='TypeP'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
				</div>
			    <div id='butt'> 
			    <button className='FrameB'>Shop Now</button>
				<button className='FrameC'> Category</button>
				</div>
				<div className='shop'>
				<h4>also available on </h4>
					<img style={{width:'45px', height:'41px'}} src='/images/flipkart.png' alt='flipkart'/>
					<img style={{width:'50px', height:'46px', marginLeft:'10px'}} src='/images/amazone.png' alt='amazone'/>
				</div>
			</div>
			 
			<img className='shoeImg' src='/images/shoes.png'/>
		</div>
	)
}

export default Heros
