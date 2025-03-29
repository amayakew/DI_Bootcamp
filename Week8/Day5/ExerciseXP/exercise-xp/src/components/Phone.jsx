import { useState } from "react";

const Phone = () => {
    const [brand, setBrand] = useState("Sumsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("Black");
    const [year, setYear] = useState("2020");

    const changeColor = () => {
        setColor("Blue");
    };

    return(
        <>
            <p>Exercise 3</p>
            <h1>My phone is {brand}</h1>
            <p>It is a {color} {model} from {year}</p>
            <button type="button" onClick={changeColor}>Change color</button>
        </>
    );
};

export default Phone;
