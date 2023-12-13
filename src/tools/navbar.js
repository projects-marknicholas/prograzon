import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

function Navbar(){
	return(
		<div className="App">
			<nav>
        <div className="container">
        	<div className="left">
	          <Link to="/"><img src={logo}></img></Link>
	        </div>
	        <div className="right">
	          <Link to="/challenges">Challenges</Link>
	          <Link to="/posts">Posts</Link>
	        </div>
        </div>
      </nav>
		</div>
	)
}

export default Navbar;