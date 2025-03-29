import { useEffect, useState } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    const changeColor = () => {
        setFavoriteColor("blue");
    };

    useEffect(() => {
        setTimeout(() => {
            setFavoriteColor("yellow");
            alert("useEffect reached");
        }, 2000);
    },[]);

    return(
        <>
            <p>Exercise 4</p>
            <h2>My favorite color is {favoriteColor}</h2>
            <button type="button" onClick={changeColor}>Change color</button>
        </>
    );
};

export default Color;