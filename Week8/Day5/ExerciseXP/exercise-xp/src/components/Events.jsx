import { useState } from "react";

const Events = () => {
    const clickMe = () => {
        alert('I was clicked')
    };

    const [text, setText] = useState("");
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert(`The Enter key was pressed, your input is: ${text}`)
        };
    };

    const [isToggleOn, setIsToggleOn] = useState(true);
    const toggleBtn = () => {
        setIsToggleOn(!isToggleOn);
    };

    return(
        <>
            <p>Exercise 2</p>
            <button type="button" onClick={clickMe}>Click Me</button><br/><br/>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write and press ENTER" onKeyDown={handleKeyDown}/><br/><br/>
            <button type="button" onClick={toggleBtn}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    );
};

export default Events;