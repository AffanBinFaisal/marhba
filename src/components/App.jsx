import React from "react";
import Title from "./Title";
import List from "./List";
import Table from "./Table";
import Carousel from "./Carousel";
import CreateEvent from "./CreateEvent";
import NavBar from "./NavBar";
import CreatePastEvents from "./CreatePastEvents";
import CreateVideos from "./CreateVideos";
import ContactUs from "./ContactUs";
import Clock from "./Clock";
import Timings from "./Timings";
import SupportUs from "./SupportUs";

function App() {
  return (
    <div>
      <NavBar />
      <Title />
      <List />
      <Carousel />
      <Clock />
      <Timings />
      <Table />
      <CreateEvent />
      <CreatePastEvents />
      <CreateVideos />
      <ContactUs />
      <SupportUs />
    </div>
  );
}

export default App;
