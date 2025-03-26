import React from "react";
import './Exercise3.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

class Exercise3 extends React.Component {
    render() {
        return <div>
            <h1 style={{
                color: 'red', 
                backgroundColor: 'lightblue'
            }}>Hello</h1>
            <p className="para">I'm Nastya</p>
            <a href='https://github.com/amayakew'></a>
            <form>
                <label for='name'>Your Name: </label>
                <input type='text' id='name'/>
            </form>
            <img src='https://i.pinimg.com/originals/36/3e/f8/363ef81a8222d5deb7468cf4017367bc.gif'></img>
            <ol>
                <li>Bye!</li>
                <li>Ciao!</li>
            </ol>

            <h1 style={style_header}>Part II</h1>
        </div>
    };
};

export default Exercise3;