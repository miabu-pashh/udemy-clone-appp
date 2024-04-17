import React, { useState ,Link} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Video from "../Video";


const Book = () => {
  // State to store selected text
  const [selectedText, setSelectedText] = useState("");
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });

  // Function to handle text selection
  const handleTextSelection = () => {
    // const selection = window.getSelection();
    // console.log(selection);
    // const text = selection.toString();
    // setSelectedText(text);
    

    const selection = window.getSelection();
  let selectedText = "";
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    const endContainer = range.endContainer;

    // Iterate over each character in the selected range
    let currentNode = startContainer;
    while (currentNode && currentNode !== endContainer.nextSibling) {
      if (currentNode.nodeType === Node.TEXT_NODE) {
        const text = currentNode.textContent;
        const startOffset = (currentNode === startContainer) ? range.startOffset : 0;
        const endOffset = (currentNode === endContainer) ? range.endOffset : text.length;
        selectedText += text.substring(startOffset, endOffset);
      }
      currentNode = currentNode.nextSibling;
    }
  }

  setSelectedText(selectedText);
  const { x, y } = selection.getRangeAt(0).getBoundingClientRect();
  setSelectionPosition({ x, y });
  console.log("thisb is the seelcted text",selectedText);
  // console.log("Selected text:", selectedText);
  };

  // Function to handle opening another page
  const openVideoPage = () => {
    // Logic to open another page, e.g., using React Router
    console.log("Opening another page with selected text:", selectedText);

    const Text = selectedText.toString();
    window.location.href = `/Video?selectedText=${encodeURIComponent(Text)}`;

  };



  const openAudioPage = () => {
    // Logic to open another page, e.g., using React Router
    console.log("Opening another page with selected text:", selectedText);
    const Text = selectedText.toString();
    window.location.href = `/Audio?selectedText=${encodeURIComponent(Text)}`;
  };
  const openDoubtPage = () => {
    // Logic to open another page, e.g., using React Router
    console.log("Opening another page with selected text:", selectedText);
  };

  return (
    <BookWrapper>
      <div className="ebook-page" onMouseUp={handleTextSelection}>
        <div className="book">
          <div className="cover">
            <h2>Python Learning</h2>
          </div>
          <div className="page">
            <div className="right-page">
              <div className="content">
                <h3  style={{textAlign:"center", padding:"10px", color:"green", fontFamily:"sans-serif", fontWeight:"50"}}>Python Learning Content</h3>


                <div className="chapter">
                  <h4>1. Introduction to Python</h4>
                  <ul>
                    <li>What is Python?</li>
                    <li>History of Python</li>
                    <li>Why Learn Python?</li>
                    <li>Installing Python</li>
                    <li>Setting Up Development Environment</li>
                  </ul>
                </div>
                {/* Add more chapters here */}
                <div className="chapter">
                  <h4>11. Further Learning Resources</h4>
                  <ul>
                    <li>Online Documentation and Tutorials</li>
                    <li>Recommended Books</li>
                    <li>Coding Challenges and Exercises</li>
                    <li>Community Forums and Discussion Groups</li>
                  </ul>
                </div>
                <h3>Introduction to Python</h3>
<p>
  This chapter introduces Python, a high-level programming language known for its simplicity and readability. We explore the history of Python, including its origins and major milestones. We discuss the reasons why learning Python is valuable, such as its widespread use in various domains like web development, data science, and artificial intelligence. The chapter also covers practical aspects like installing Python on different platforms and setting up a development environment.
</p>

<h3>Python Basics:</h3>
<p>
  Here, we cover the fundamental building blocks of Python programming, starting with <strong>basic syntax and data types</strong>. We learn how to <strong>print output, declare variables, and use basic operators</strong> for arithmetic and logical operations. Topics include <strong>comments for code documentation, working with strings</strong>, and understanding different data structures like <strong>lists, tuples, dictionaries, and sets</strong>.
</p>

<h3>Control Flow:</h3>
<p>
  This chapter delves into control flow statements, which allow us to control the execution of code based on certain conditions. We explore conditional statements like if, elif, and else, as well as looping constructs such as for and while. Additionally, we cover how to use break and continue statements to modify the flow of loops, and the pass statement for placeholder code blocks.
</p>

<h3>Functions:</h3>
<p>
  <strong>Functions</strong> are essential for organizing and reusing code. In this chapter, we learn how to define functions, pass parameters, and return values. We discuss the concept of scope in Python, distinguishing between local and global variables. Examples demonstrate how to create and call functions, as well as handle different scenarios like function overloading and recursion.
</p>

<h3>Data Structures and Built-in Functions:</h3>
<p>
  <strong>Data structures</strong> are fundamental for organizing and manipulating data efficiently. We explore how to work with lists, tuples, dictionaries, and sets in Python. List comprehensions are introduced as a concise way to create lists based on existing ones. We also cover various <strong>built-in functions</strong> provided by Python for common tasks like finding the length of a sequence, calculating the maximum or minimum value, and performing aggregation operations.
</p>

<h3>File Handling:</h3>
<p>
  File handling is crucial for interacting with external files. This chapter covers how to open, read from, and write to files in Python. Context managers, especially the with statement, are introduced as a cleaner way to manage file resources and ensure proper handling of file operations. Error Handling: Errors are inevitable in programming, but Python provides mechanisms for handling them gracefully. This chapter explores exception handling using try, except, and finally blocks. We learn how to catch specific exceptions and raise custom exceptions when necessary.
</p>

<h3>Object-Oriented Programming (OOP):</h3>
<p>
  <strong>Object-oriented programming</strong> is a powerful paradigm for structuring code. This chapter introduces classes and objects, the building blocks of OOP. Concepts like inheritance, encapsulation, and polymorphism are explained with practical examples to illustrate their usage in Python. Modules and Packages: Python's modular design
</p>
</div>
                
            </div>
          </div>
        </div>

        {selectedText && (
          <div
            className="selection-options"
            style={{
              position: "absolute",
            
              height:"250px",
              width:"200px",

              top: selectionPosition.y + window.scrollY + "px",
              left: selectionPosition.x + "px",
              backgroundColor: "#dee2e6",
              border: "1px solid grey",
              padding: "7px",
              borderRadius: "5px",
              fontSize:"15px",
              boxShadow:"0 0 10px rgba(0,0,0,0.2)",
              
            }}
          >
            <button onClick={openVideoPage}>
            <ul style={{fontSize:"15px"}}>Switch to Video Section</ul>
            </button>
            <hr/>
            <button onClick={openAudioPage}>
            <ul>Switch to Audio Section</ul>
            </button>
            <hr/>
            <button onClick={openDoubtPage}>
            <ul>Switch to Doubt Chat</ul>
            </button>
            <hr/>
            
          </div>
        )}
      </div>
    </BookWrapper>
  );
};
const BookWrapper = styled.div`
  .book {
    margin: 50px;
    width: 80%;
    height: 100vh;

    background-color: #8ecae6;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    // display: flex;
    // justify-content: center;
    // align-items: center;
  }

  .cover {
    background-color: #8ecae6;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .cover h2 {
    font-size: 24px;
    color: black;
    text-align: center;
  }

  .page {
    padding: 20px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
  }

  .left-page,
  .right-page {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    // justify-content: center;
    align-items: center;
  }

  .content {
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .chapter {
    margin-bottom: 20px;
  }

  .chapter h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding-left: 20px;
  }

  ul li {
    margin-bottom: 5px;
  }
`;

export default Book;
