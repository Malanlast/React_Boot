 import React from 'react'
 import style from "./Header.module.css"
 const Header=()=> {
	return (
		<nav className={`${style.header} container`}> 
		<div style={{height:'72px',width:'72px' }}>
			<img src='/images/logo.png' alt='logo'/>
		</div>
		<ul>
			<li>Home</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
		</nav>
	);
 };
 
 export default Header
 