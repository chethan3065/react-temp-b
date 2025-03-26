import React from "react";
import { useState, useEffect } from "react";
export default function App9() {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    setTotal(Number(v1) + Number(v2));
  }, [v1]);

  useEffect(() => {
    setTotal(Number(v1) * Number(v2));
  }, [v2]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setV1(e.target.value)}
        placeholder="Enter Amount"
      ></input>
      <input
        type="number"
        onChange={(e) => setV2(e.target.value)}
        placeholder="Enter Amount"
      ></input>
      <button onClick={handleAdd}>Add</button>
      <hr></hr>
      {v1 && v2.map((value, index) => <div key={index}>{value}</div>)}
      Total:{total}
    </div>
  );
}