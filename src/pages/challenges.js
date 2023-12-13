import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Challenges(){
	//Page Title
  useEffect(() => {
    document.title = "Challenges | Prograzon";
  }, []);

	return(
		<div className="App">
			<div className="container">
        <section id="hero">
          <h1>Challenges</h1>
          <h3>Challenge 1: Palindrome Checker</h3>
          <span>
            <center><strong>RUBRICS</strong></center>
            Correctness and functionalities: <strong>30 points</strong><br/>
            Readability and Maintainability: <strong>20 points</strong><br/>
            Efficiency and Performance: <strong>15 points</strong><br/>
            Error Handling and Robustness: <strong>15 points</strong><br/>
            Security and Vulnerabilities: <strong>10 points</strong><br/>
            Documentations and Comments: <strong>5 points</strong><br/>
            Testing and Testability: <strong>5 points</strong><br/>
          </span>
        </section>
        <section id="challenge">
          <Link to="/challenge-1" className="item">
            <div className="tip">Challenge 1</div>
            <h2>Palindrome Checker</h2>
            <p>It checks whether the given text is spelled equally from left to right and from right to left. If so, then in the output you get true, if not - false.</p>
          </Link>
          <Link to="#" className="item">
            <div className="tip">Challenge 2</div>
            <h2></h2>
            <p></p>
          </Link>
          <Link to="#" className="item">
            <div className="tip">Challenge 3</div>
            <h2></h2>
            <p></p>
          </Link>
          <Link to="#" className="item">
            <div className="tip">Challenge 4</div>
            <h2></h2>
            <p></p>
          </Link>
        </section>
      </div><br/>
		</div>
	)
}

export default Challenges;