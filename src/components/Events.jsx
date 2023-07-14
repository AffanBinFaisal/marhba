import React from "react";

function Events(props) {
  return (
    <div className="card grid-item">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">{props.detail}</div>
        <a href="#a" className="btn btn-primary">
          Like
        </a>
      </div>
    </div>
  );
}

export default Events;
