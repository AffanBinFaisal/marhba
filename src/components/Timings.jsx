import { useState, React } from "react";
import db from "./db";
import { doc, getDoc } from "firebase/firestore";

function Timings() {
  const [time, setTime] = useState({});

  async function getTime() {
    const times = await getDoc(doc(db, "timings", "iLXO00XIFeBtgta6qt1e"));
    setTime(times.data());
  }

  getTime();

  return (
    <div>
      <h2>Prayer Timings</h2>
      <table className="table text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Prayer</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Fajr</th>
            <td>{time.fajr}</td>
          </tr>
          <tr>
            <th scope="row">Zuhr</th>
            <td>{time.zuhr}</td>
          </tr>
          <tr>
            <th scope="row">Asr</th>
            <td>{time.asr}</td>
          </tr>
          <tr>
            <th scope="row">Maghrib</th>
            <td>{time.maghrib}</td>
          </tr>
          <tr>
            <th scope="row">Isha</th>
            <td>{time.isha}</td>
          </tr>
          <tr>
            <th scope="row">Jummah</th>
            <td>{time.jummah}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Timings;
