import Video from "./Video";
import { React, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "./db";

function CreateVideos() {
  let list = [];
  const [videos, setVideos] = useState([]);
  function getEvents() {
    getDocs(query(collection(db, "videos"), where("active", "==", true))).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setVideos(list);
      }
    );
  }

  getEvents();
  const videoProps = videos.map(function (video) {
    return (
      <div>
        <Video src={video.src} title={video.title} />
      </div>
    );
  });

  return (
    <div>
      <h2>Videos</h2>
      <div className="videos">{videoProps}</div>
    </div>
  );
}

export default CreateVideos;
