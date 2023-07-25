import React from 'react'
import { useState } from 'react'

const Header = () => {
   

    const [currentColor, setCurrentColor] = useState('#FFFFFF');
    let handleColor = ()=>{
    let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

    let hexcolour = '#'
    for(let i=1;i<=6;i++){
        hexcolour += randhexvalue()
    }
    function randhexvalue(){
        let randIndex = Math.floor(Math.random()*16)
        return hex[randIndex]
    }
    setCurrentColor(hexcolour)
  }
  let divStyle = { backgroundColor: currentColor };
  return (
    <div>
      <header>
        <h1>Color Flipper</h1>
        <p id='hex'>{currentColor}</p>
      </header>
      <div className="content" style={divStyle}>
      <button onClick={handleColor}>Change Color</button>
      </div>
      
    </div>
  );
};


export default Header