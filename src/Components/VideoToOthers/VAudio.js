import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";



const AudioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/18587787/pexels-photo-18587787/free-photo-of-corridor-in-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
const AudioContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AudioPlayer = styled.audio`
  margin-top: 20px;
`;

const StyledDiv = styled.div`
margin-top:100px;
  background-color: #f0f0f0;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;


function VAudio() {
  const location = useLocation();
  const selectedTime =
  new URLSearchParams(location.search).get("selectedTime") || "";
  const audioRef = useRef(null);

  useEffect(()=>{
    console.log("in the useEffect function");

    console.log(selectedTime);
    audioRef.current.currentTime=selectedTime; 
    // if(audioRef.current && Number.isFinite(selectedTime)){
    //   console.log("in if function");
    //   audioRef.current.currentTime=selectedTime; 
    // }
  },[selectedTime]);



  // const location = useLocation();
  // const selectedText =
  // new URLSearchParams(location.search).get("selectedText") || "";

  // const [startTime, setStartTime] = useState(0);

  const sections = {
    "0":0,
    "Introduction": 0,
    "Introduction To Python": 0,
    "Python Basics": 30,
    "Control Flow": 60,
    "Strings": 1137,
    "Variables": 337,
    "Receiving Input": 569,
    "Type Conversions": 662,
    "Arithmetic Operators": 1157,
    "Operator Precedence": 1457,
    "Comparison Operator": 1573,
    "Logical Operators": 1688,
    "If Statements": 1776,
    "Exercise": 1887,
    "While loops": 2219,
    "Lists": 2566,
    "List Methods": 2760,
    "For Loops": 2977,
    "range()": 3186,
    "Tuples": 3382,
  };

  
  return (
    <AudioWrapper>
      <StyledDiv>
      <h1>This is the Audio Section</h1>
      {/* <h1>maibu</h1> */}

        <hr/>
        {/* <AudioPlayer controls start={sections[selectedText]}> */}
        <AudioPlayer ref={audioRef} controls
        >
          <source src="/PythonAudio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </AudioPlayer>


      </StyledDiv>
    </AudioWrapper>
  );
}



export default VAudio;
