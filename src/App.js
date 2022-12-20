import "./App.css";
import React, { useState, useRef, useEffect } from "react";


function App() {
  const [messi, setMessi] = useState(0);
  const [ronaldo, setRonaldo] = useState(0);

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  const handleLeft = () => {
    setPosition({
      ...position,
      x: position.x - 10,
    });
  };
  const handleUp = () => {
    setPosition({
      ...position,
      y: position.y - 10,
    });
    console.log(position);
  };
  const handleRight = () => {
    setPosition({
      ...position,
      x: position.x + 10,
    });
  };
  const handleDown = () => {
    setPosition({
      ...position,
      y: position.y + 10,
    });
  };

  useEffect(() => {
    if (position.x === 90) {
      setMessi(messi + 1);
      setPosition({
        x:50,
        y:50
      })
    }
    else if(position.x === 10){
      setRonaldo(ronaldo + 1);
      setPosition({
        x:50,
        y:50
      })
    }
    else if(position.y === 0){
      setPosition({
        x:50,
        y:50
      })
    }
    else if(position.y === 100){
      setPosition({
        x:50,
        y:50
      })
    }
  }, [position]);

  console.log(position);

  const mystyle = {
    position: "absolute",
    top: `${position.y}%`,
    left: `${position.x}%`,
    transform: "translate(-50%,-50%)",
  };

  return (
   <>
   
   
   <div className="football_bigdiv">
      <div className="ball_score">
        <div>
          <h1>
            {" "}
            Messi <span>{messi}</span>
          </h1>
        </div>
        <div>
          <h1>
            {" "}
            <span>{ronaldo}</span>Ronaldo
          </h1>
        </div>
      </div>
      <div className="football_minidiv">
        <div className="football_div"></div>
        <div className="ball" style={mystyle}></div>
        <div className="football_div"></div>
      </div>
      <div className="buttons">
        <button onClick={() => handleLeft()}>&larr;</button>
        <div className="btn_mini">
          <button onClick={() => handleUp()}>&uarr;</button>
          <button onClick={() => handleDown()}>&darr;</button>
        </div>
        <button onClick={() => handleRight()}>&rarr;</button>
      </div>
      
    </div>
   </>
  );
}

export default App;
