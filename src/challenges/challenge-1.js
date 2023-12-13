import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function Challenge1(){
	//Page Title
  useEffect(() => {
    document.title = "Palindrome Chacker | Prograzon";
  }, []);

  const karlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
    
</head>

<style type="text/css">
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    margin: 50px auto;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    background-color: #4CAF50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

p#result {
    font-weight: bold;
    margin-top: 10px;
}


</style>
<body>
    <div class="container">
        <h1>Palindrome Checker</h1>
        <label for="inputString">Enter a string:</label>
        <input type="text" id="inputString">
        <button id="checkButton">Check</button>
        <p id="result"></p>
    </div>
    <script>
    
    document.addEventListener("DOMContentLoaded", function () {
    const inputString = document.getElementById("inputString");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");
    
    checkButton.addEventListener("click", function () {
    const str = inputString.value;
    const reverseStr = str.split("").reverse().join("");
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const cleanedReverseStr = reverseStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    if (cleanedStr === cleanedReverseStr) {
    result.textContent = str + " is a Palindrome String.";
    } else {
    result.textContent = str + " is not a Palindrome String.";
    }
    });
    });
    
    </script>
</body>
</html>
  `;

  const baltazarCode = `
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String str = scanner.nextLine();
    scanner.close();

    String reverseStr = "";
    
    int strLength = str.length();

    for (int i = (strLength - 1); i >=0; --i) {
      reverseStr = reverseStr + str.charAt(i);
    }

    if (str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase().equals(reverseStr.replaceAll("[^a-zA-Z0-9]", "").toLowerCase())) {
      System.out.println(str + " is a Palindrome String.");
    }
    else {
      System.out.println(str + " is not a Palindrome String.");
    }
  }
}
  `;

const coleCode = `
def is_palindrome(s):
  s = ''.join(s.split()).lower()
  return s == s[::-1]

input_string = input("Enter a string: ")
result = is_palindrome(input_string)

if result:
  print(f'"{input_string}" is a palindrome.')
else:
  print(f'"{input_string}" is not a palindrome.')
`;

const arielCode = `
function isPalindrome(s) {
    s = s.replace(/\s/g, '').toLowerCase();
    return s === s.split('').reverse().join('');
}

// Example usage
let inputString = "Able , was I, saw eLba";
let result = isPalindrome(inputString);

if (result) {
    console.log(\`"\${inputString}" is a palindrome.\`);
} else {
    console.log(\`"\${inputString}" is not a palindrome.\`);
}
`;

const johnCode = `
<?php
function isPalindrome($s) {
    $s = preg_replace('/\s+/', '', strtolower($s));
    return $s === strrev($s);
}

$inputString = "Able , was I, saw eLba";
$result = isPalindrome($inputString);

if ($result) {
    echo "\"$inputString\" is a palindrome.";
} else {
    echo "\"$inputString\" is not a palindrome.";
}
?>
`;

	return(
		<div className="App">
			<div className="container">
        <section id="hero">
          <h1>Palindrome Checker</h1>
          <h3>Congratulations <strong>Karl Milla!</strong> You did a great job.</h3>
          <div className="code-check">
            <div className="item">
              <div className="flex-code">
                <div className="left">
                  <a href="https://web.facebook.com/kel.solis.77">Karl Milla</a>
                </div>
                <div className="right">
                  <p className="success-code">Winner</p>
                </div>
              </div>
          
              <div id="code">
                <pre>
                  <div className="rubrics">
                    Correctness and functionalities: <strong className="high">28/30 points</strong><br/>
                    Readability and Maintainability: <strong className="high">19/20 points</strong><br/>
                    Efficiency and Performance: <strong className="mid">13/15 points</strong><br/>
                    Error Handling and Robustness: <strong className="mid">12/15 points</strong><br/>
                    Security and Vulnerabilities: <strong className="high">10/10 points</strong><br/>
                    Documentations and Comments: <strong className="high">4/5 points</strong><br/>
                    Testing and Testability: <strong className="high">4/5 points</strong><br/>
                    <strong className="overall-mid">85/100 points</strong>
                  </div>                 
                  {karlCode}
                </pre>
              </div>
            </div>

            <div className="item">
              <div className="flex-code">
                <div className="left">
                  <a href="https://web.facebook.com/geo.hypostasis">Baltazar Ronaldo</a>
                </div>
                <div className="right">
                  <p className="almost-code">almost there</p>
                </div>
              </div>
              
              <div id="code">
                <pre>
                  <div className="rubrics">
                    Correctness and functionalities: <strong className="high">28/30 points</strong><br/>
                    Readability and Maintainability: <strong className="high">18/20 points</strong><br/>
                    Efficiency and Performance: <strong className="mid">13/15 points</strong><br/>
                    Error Handling and Robustness: <strong className="mid">12/15 points</strong><br/>
                    Security and Vulnerabilities: <strong className="high">10/10 points</strong><br/>
                    Documentations and Comments: <strong className="high">4/5 points</strong><br/>
                    Testing and Testability: <strong className="high">4/5 points</strong><br/>
                    <strong className="overall-mid">84/100 points</strong>
                  </div>  
                  {baltazarCode}
                </pre>
              </div>
            </div>

            <div className="item">
              <div className="flex-code">
                <div className="left">
                  <a href="#">Cole Amir Legazpí</a>
                </div>
                <div className="right">
                  <p className="fail-code">fail</p>
                </div>
              </div>
              
              <div id="code">
                <pre>
                  <div className="rubrics">
                    Correctness and functionalities: <strong className="high">28/30 points</strong><br/>
                    Readability and Maintainability: <strong className="high">18/20 points</strong><br/>
                    Efficiency and Performance: <strong className="mid">13/15 points</strong><br/>
                    Error Handling and Robustness: <strong className="mid">12/15 points</strong><br/>
                    Security and Vulnerabilities: <strong className="high">10/10 points</strong><br/>
                    Documentations and Comments: <strong className="high">3/5 points</strong><br/>
                    Testing and Testability: <strong className="high">3/5 points</strong><br/>
                    <strong className="overall-mid">82/100 points</strong>
                  </div> 
                  {coleCode}
                </pre>
              </div>
            </div>

            <div className="item">
              <div className="flex-code">
                <div className="left">
                  <a href="#">Ariel Zamora</a>
                </div>
                <div className="right">
                  <p className="fail-code">fail</p>
                </div>
              </div>
              
              <div id="code">
                <pre>
                  <div className="rubrics">
                    Correctness and functionalities: <strong className="high">27/30 points</strong><br/>
                    Readability and Maintainability: <strong className="high">18/20 points</strong><br/>
                    Efficiency and Performance: <strong className="mid">11/15 points</strong><br/>
                    Error Handling and Robustness: <strong className="mid">11/15 points</strong><br/>
                    Security and Vulnerabilities: <strong className="high">8/10 points</strong><br/>
                    Documentations and Comments: <strong className="high">4/5 points</strong><br/>
                    Testing and Testability: <strong className="high">3/5 points</strong><br/>
                    <strong className="overall-mid">82/100 points</strong>
                  </div> 
                  {arielCode}
                </pre>
              </div>
            </div>

            <div className="item">
              <div className="flex-code">
                <div className="left">
                  <a href="#">John Adrian Escosura</a>
                </div>
                <div className="right">
                  <p className="fail-code">fail</p>
                </div>
              </div>
              
              <div id="code">
                <pre>
                  <div className="rubrics">
                    Correctness and functionalities: <strong className="high">27/30 points</strong><br/>
                    Readability and Maintainability: <strong className="high">16/20 points</strong><br/>
                    Efficiency and Performance: <strong className="mid">11/15 points</strong><br/>
                    Error Handling and Robustness: <strong className="mid">11/15 points</strong><br/>
                    Security and Vulnerabilities: <strong className="high">9/10 points</strong><br/>
                    Documentations and Comments: <strong className="high">3/5 points</strong><br/>
                    Testing and Testability: <strong className="high">3/5 points</strong><br/>
                    <strong className="overall-low">80/100 points</strong>
                  </div> 
                  {johnCode} 
                </pre>
              </div>
            </div>

          </div>
        </section>
      </div>
		</div>
	)
}

export default Challenge1;