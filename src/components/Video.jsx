import React from "react";

function Video(props) {
  return (
    <div className="video">
      <iframe
        title={props.title}
        style={{ width: "100%", height: "600px" }}
        src={props.src}
      ></iframe>
    </div>
  );
}

export default Video;
