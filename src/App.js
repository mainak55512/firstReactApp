import React, { useState } from "react";
import './App.css';

let uname = ["User", "User"];

function Child(props) {

  if (props.info.log) {
    uname[1] = uname[0];
    uname[0] = props.info.data;
  }

  return (
    <>
      {
        props.info.log ?
          <h1 id="childStyle" >Hello {uname[0]}!!! Nice to meet you {":)"}</h1>
          :
          <h1 id="childStyle" >Hello {uname[1]}!!! Nice to meet you {":)"}</h1>
      }
    </>
  );
}

export function App() {
  const [data, setData] = useState("");
  const [log, setLog] = useState(false);
  const dataInfo = { data: data, log: log }

  function getVal(event) {
    setData(event.target.value);
    setLog(false);
  }



  return (
    <>
      <Child info={dataInfo} />
      <input type="text" onChange={getVal} id = "inpStyle" placeholder="Enter Name Here"/>
      <button onClick={() => setLog(true)} id = "buttonStyle">log</button>
    </>
  );
}
