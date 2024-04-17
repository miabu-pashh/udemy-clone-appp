import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VAudio from "./VAudio";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: clr-white;

  display: flex;
  flex-direction: column;
  align-items: center;

  .switchFormat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center the button horizontally */
  }
`;
const StyledReactPlayer = styled(ReactPlayer)`
  width: 85%;
  height: 500px;
  border: 10px solid #00a8e8; /* Border style */
  border-radius: 10px; /* Rounded corners */
  margin-top: 50px; /* Margin at the top */
  margin-bottom: 20px;
`;
const SwitchButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the button horizontally */
  width: 300px; /* Adjust width as needed */
  height: 70px; /* Adjust height as needed */
  background-color: #4f772d; /* Blue color */
  color: white; /* Text color */
  border-radius: 5px;
  margin-top: 10px; /* Add margin at the top */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */

  /* Additional styling for hover effect */
  &:hover {
    background-color: #90a955; /* Darker blue color */
  }
`;

function Mvideo({ history }) {
  // const history = useHistory(); // Initialize useHistory hook

  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Handle onProgress event to get the current time of the video playing
  const HandleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  const sections = {
    Introduction: 0,
    "Introduction To Python": 0,
    "Python Basics": 30,
    "Control Flow": 60,
    Strings: 1137,
    Variables: 337,
    "Receiving Input": 569,
    "Type Conversions": 662,
    Strings: 1157,
    "Arithmetic Operators": 1457,
    "Operator Precedence": 1573,
    "Comparision Operator": 1688,
    "Logical Operators": 1776,
    "If Statements": 1887,
    Exercise: 2219,
    "While loops": 2566,
    Lists: 2760,
    "List Methods": 2977,
    "For Loops": 3186,
    "range()": 3382,
    Tuples: 3541,
  };
  const OpenAudio = () => {
    // Navigate to the audio section by pushing the '/audio' route to the history stack
    // Pass the current time as a query parameter
    history.push(`/Vaudio?currentTime=${currentTime}`);
  };

  const OpenBook = () => {
    // Navigate to the book section by pushing the '/book' route to the history stack
    history.push("/Book");
  };

  return (
    <VideoWrapper>
      <h1>This is the video section</h1>

      <StyledReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=kqtD5dpn9C8" // Example YouTube video URL
        width="80%"
        height="400px"
        controls={true}
        onProgress={HandleProgress} //gET THE CURRENT TIME OF THE VIDEO
      />
      <div className="switchFormat">
        <SwitchButton to={`/Vaudio?selectedTime=${currentTime}`}>
          Open the Audio Format
        </SwitchButton>
        <SwitchButton to="/Book">Open the Book Format</SwitchButton>
      </div>
    </VideoWrapper>
  );
}

export default Mvideo;
