import { React, useState } from "react";
import Events from "./Events";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "./db";

function CreatePastEvents() {
  let list = [];
  const [events, setEvents] = useState([]);

  function getEvents() {
    getDocs(
      query(collection(db, "events"), where("completion", "==", true))
    ).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setEvents(list);
    });
  }

  getEvents();
  const eventProps = events.map(function (event) {
    return (
      <div className="event">
        <Events title={event.title} detail={event.detail} img={event.img} />
      </div>
    );
  });

  return (
    <div>
      <h2>Past Events</h2>
      <div className="scrollmenu">{eventProps}</div>
    </div>
  );
}

export default CreatePastEvents;
