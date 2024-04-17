import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

function Avideo() {
  const location = useLocation();
  const selectedText =
  new URLSearchParams(location.search).get("selectedText") || "";
  console.log(selectedText);
  const [startTime, setStartTime] = useState(0);


  // setStartTime(selectedText);
  // console.log(startTime);


  return (
    <div>
      <h1>This is the video section</h1>
      <h2>Video Page</h2>
      <p>Selected Text: {selectedText}</p>
      <p>Starting Time: {selectedText} seconds</p>
      {/* Embedding a video */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kqtD5dpn9C8" // Example YouTube video URL
        width="100%"
        height="400px"
        controls={true}  
        start={selectedText}
        // config={{ youtube: { playerVars: { start: selectedText} } }}
      />

    </div>
  );
}

export default Avideo;
