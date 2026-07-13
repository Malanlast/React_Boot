import React from 'react'

function Navigation() {
	return (
		<nav className="container"> 
		<div className="logo">
			<img id='logo' src="/images/nikeLogo.png" alt="logo"/>
		</div>
		<ul> 
		<li href="#">MENU</li>
		<li href="#">LOCATION</li>
		<li href="#">ABOUT</li>
		<li href="#">CONTACT</li>
		</ul>
		<button>LOGIN</button>
		</nav>
	)
}

export default Navigation
