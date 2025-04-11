import React from 'react'
import {memo} from "react";

function Child(props) {
    console.log("Child component Loaded...");
  return (
    <div>
        {props.num < 16 ? <h4>Good Morning</h4> : <h4>Good Evening</h4>}
    </div>
  )
}
export default memo(Child)
