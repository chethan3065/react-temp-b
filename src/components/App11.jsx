import React, { useRef, useState } from 'react';

export default function App11() {
  const msgRef = useRef();
  const [color, setColor] = useState();

  const handleSubmit = () => {
    msgRef.current.style.color = color;
  };

  return (
    <div><center>
        <div><h3>This is App11</h3></div>
        <p>
          <b>Concept Name:</b> This is a simple explanation of the concept where the color of the text "Hello World" changes based on the given input color.
        </p>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleSubmit}>Change Color</button>
      <h2 ref={msgRef}>Hello World</h2>
      </center>
    </div>
  );
}
