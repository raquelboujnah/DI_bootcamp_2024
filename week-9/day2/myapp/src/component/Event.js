import React, { useState } from 'react';

const Events = () => {
    const [inputvalue, setInputValue] = useState('');
    const [isToggleOn, setIsToggleOn] = useState(true)
    const clickMe = () => {
      alert('I was clicked');
    };
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`the enter key was preesed, your input is: ${inputvalue}`)
        }
    };

    const switchVar = () => {
        setIsToggleOn(prevState => !prevState);
    }

    return (
      <div>
        <button onClick={clickMe}>Click Me</button>
        <input value={inputvalue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="Enter a key"/>
        <button onClick={switchVar}>{isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
}



export default Events