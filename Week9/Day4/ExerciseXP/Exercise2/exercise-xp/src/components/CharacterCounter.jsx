import { useState, useRef } from "react";

const CharacterCounter = () => {
    const [inputLength, setInputLength] = useState(0);
    const inputRef = useRef();

    const updateLength = () => {
        const inputValue = inputRef.current.value;
        setInputLength(inputValue.length);

    }

    return (
        <>
            <h1>Character Counter</h1>
            <input ref={inputRef} onChange={updateLength}/>
            <h4>The length of your string is: </h4>
            <h3>{inputLength}</h3>
        </>
    );
};

export default CharacterCounter;