import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

function Video() {
  const location = useLocation();
  const selectedText =
  new URLSearchParams(location.search).get("selectedText") || "";
  const [startTime, setStartTime] = useState(0);
  const sections = {
    "Introduction": 0,
    "Introduction To Python": 0,
    "Python Basics": 30,
    "Control Flow": 60,
    "Strings": 1137,
    "Variables": 337,
    "Receiving Input": 569,
    "Type Conversions": 662,
    "Strings": 1157,
    "Arithmetic Operators": 1457,
    "Operator Precedence": 1573,
    "Comparision Operator": 1688,
    "Logical Operators": 1776,
    "If Statements": 1887,
    "Exercise": 2219,
    "While loops": 2566,
    "Lists": 2760,
    "List Methods": 2977,
    "For Loops": 3186,
    "range()": 3382,
    "Tuples": 3541,
  };
  console.log("in the useEfffect section, the seleted text and start time are :",selectedText," ",sections[selectedText]);

  // Check if selected text matches any section name
  useEffect(() => {
    console.log("in the useEfffect section, the seleted text and start time are :",selectedText," ",startTime);
    if (selectedText && sections[selectedText]) {
      setStartTime(sections[selectedText]);
      console.log("the start time is " + startTime);
    }
  }, [selectedText, sections]);

  return (
    <div>
      <h1>This is the video section</h1>
      <h2>Video Page</h2>
      <p>Selected Text: {selectedText}</p>
      <p>Starting Time: {startTime} seconds</p>
      {/* Embedding a video */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kqtD5dpn9C8" // Example YouTube video URL
        width="100%"
        height="400px"
        controls={true}  
        // start={sections[selectedText]}

        config={{
          youtube: {
            playerVars: {
              start: startTime // Set the start time based on the selected text
            }
          }
        }}
        // config={{ youtube: { playerVars: { start: sections[selectedText]} } }}
        />
    </div>
  );
}

export default Video;
