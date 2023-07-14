import { useState, React } from "react";
import db from "./db";
import { doc, getDoc } from "firebase/firestore";

function SupportUs() {
  const [data, setData] = useState({});

  async function getData() {
    const data = await getDoc(doc(db, "payments", "YoCv7XdUzTLlVpNkVnqk"));
    setData(data.data());
  }

  getData();
  return (
    <div className="support">
      <h2>Support Us</h2>
      <div className="card">
        <img src={data.img} className="card-img-top" alt="..." />
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Payment Method</th>
              <th scope="col">No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">EasyPaisa</th>
              <td>{data.easypaisa}</td>
            </tr>
            <tr>
              <th scope="row">JazzCash</th>
              <td>{data.jazzcash}</td>
            </tr>
            <tr>
              <th scope="row">BankAccount</th>
              <td>{data.bankacc}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupportUs;
