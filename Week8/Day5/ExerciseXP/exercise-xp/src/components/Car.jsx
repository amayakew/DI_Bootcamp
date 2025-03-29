import { useState } from "react";
import Garage from './Garage.jsx';

const Car = (props) => {
    const [color] = useState("red");

    return (
        <>
            <p>Exercise 1</p>
            <h1>This car is {color} {props.model}</h1>
            <Garage size="small"/>
        </>
    );
};

export default Car;