import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  margin-top: 100px;
  background-color: #f0f0f0;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const SwitchSectionDiv = styled.div`
  margin-top: 40px;
 
`;

const SwitchButton = styled(Link)`
  height: 50px; /* Adjust the height as needed */
  width: 100%; /* Make the button fill the entire width */

  background-color: green;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction:horizontal;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 20px; /* Add some margin for spacing */
`;

function Maudio() {

  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const sections = {
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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  return (
    <AudioWrapper>
      <StyledDiv>
        <h1>This is the Audio Section</h1>
        <hr/>
        <AudioPlayer ref={audioRef} controls onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}>
          <source src="/PythonAudio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </AudioPlayer>
        <SwitchSectionDiv>
          <h3>Switch to any other Format?</h3>
          <hr/>
          <SwitchButton to={`/Avideo?selectedText=${currentTime}`}>Open the Video Format</SwitchButton>
          <SwitchButton to="/Book">Open the Book Format</SwitchButton>
        </SwitchSectionDiv>
      </StyledDiv>
    </AudioWrapper>
  );
}

export default Maudio;
