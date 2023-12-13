import { useState, useEffect } from 'react'
import aboutImg from '../img/about.png'
import techImg from '../img/tech.png'
import codeImg from '../img/code.png'
import fundaImg from '../img/funda.png'

function Home(){
  //Page Title
  useEffect(() => {
    document.title = "Prograzon - Learn and Build something.";
  }, []);

	return(
		<div className="App">
			<div className="container">
        <section id="hero">
          <h1>Your development path begins here.</h1>
          <h3>Start your journey now and make the most of your coding abilities.</h3>
          <span>
            Current challenge: <strong>Challenge 1: Palindrome Checker</strong> <br/>
            Last week’s winner: <strong><a href="https://web.facebook.com/kel.solis.77" className="win-a">Karl Milla</a></strong>
          </span>
        </section>
      </div>
      <section id="about">
        <div className="container flex">
          <div className="left">
            <h1>What is Prograzon?</h1>
            <p>Prograzon educates students and beginners in the intricacies of programming, aiming to empower individuals with essential skills and knowledge in the field.</p>
          </div>
          <div className="right">
            <img src={aboutImg}/>
          </div>
        </div>
      </section>
      <section id="benefits">
        <div className="container flex">
          <div className="left">
          <h3>Write the code that empowers the world.</h3>
            <div className="divider"></div>
          </div>
          <div className="right">
            <h1>What will be your benefits?</h1>
            <p>Prograzon offers a transformative learning experience, providing students and beginners with invaluable programming skills. This empowers them to tackle real-world challenges, innovate, and excel in a technology-driven landscape. With Prograzon, you'll gain a competitive edge in today's digital world.</p>
          </div>
        </div>
      </section>
      <div className="blue-divider">Learn and Build something!</div>
      <section id="tech">
        <div className="container">
          <p>Technologies that we instruct.</p>
          <img src={techImg}/>
        </div>
      </section>
      <section id="code-review">
        <div className="container">
          <h1>Put yourself to the test.</h1>
          <p>Your code will be examined line by line to ensure that each one operates as intended.</p>
          <img src={codeImg}/>
        </div>
      </section>
      <section id="funda">
        <div className="container bg">
          <img src={fundaImg}/>
          <h1 className="mt">Understand Basic Concepts</h1>
          <p>Familiarize yourself with basic programming concepts like variables, data types, loops, conditional statements, and functions.</p>
          <h1>Write Simple Programs</h1>
          <p>Begin with simple programs to practice the concepts you've learned.</p>
          <h1>Learn Data Structures and Algorithms</h1>
          <p>Understand data structures (arrays, lists, dictionaries, etc.) and algorithms (sorting, searching, etc.). These are fundamental to efficient programming.</p>
          <h1>Practice Regularly</h1>
          <p>Consistent practice is key. Try solving coding challenges on platforms like LeetCode, HackerRank, or Codecademy.</p>
          <h1>Build Small Projects</h1>
          <p>Apply your knowledge by working on small projects that interest you. This could be a simple website, a game, or a utility program.</p>
        </div>
      </section>
      <section id="ready">
        <div className="container">
          <h1>Are you now prepared to begin your programming journey?</h1>
          <a href="https://web.facebook.com/prograzon">Join our community →</a>
        </div>
      </section>
      <footer>
        <center>
          <div className="container">
            <h1>Get in touch</h1>
            <p>All rights reserved &copy; 2023</p>
          </div>
        </center>
      </footer>
		</div>
	)
}

export default Home;