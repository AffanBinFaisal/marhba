import React from "react";

function Table() {
  return (
    <div>
      <h2>AYF Unit Hassan Bin Ali (R.A)</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Unit Leaders</th>
            <th scope="col">Names</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">President</th>
            <td>Muhammad Umar Qureshi</td>
          </tr>
          <tr>
            <th scope="row">General Secreatary</th>
            <td>Hafiz Osama Ejaz</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
