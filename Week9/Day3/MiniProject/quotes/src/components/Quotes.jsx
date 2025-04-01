import data from '../data/quotes.json';
import { useState } from 'react';
import './Quotes.css'

const Quotes = () => {
    const [quote, setQuote] = useState(data[0].quote);
    const [author, setAuthor] = useState(data[0].author);
    const [color, setColor] = useState('#b8860b');

    const handleClick = () => {
        const randomObj = data[Math.floor(Math.random() * data.length)];
        if (randomObj.qoute === quote){
            handleClick();
        } else {
            setQuote(randomObj.quote);
            setAuthor(randomObj.author);
            changeColor();
        }
    }

    const changeColor = () => {
        const chars = "0123456789ABCDEF";
        let colorCode = "#";
        for (let i = 0; i < 6; i++) {
          colorCode += chars[Math.floor(Math.random() * 16)];
        }
        if (colorCode === color || colorCode === '#FFFFFF'){
            changeColor()
        } else {
            setColor(colorCode);
        }
    }

    return (
        <div className='main' style={{backgroundColor: `${color}`, color: `${color}`}}>
            <div className='quoteWrap'>
                <h2 className='quote'>"{quote}"</h2>
                <h6 className='author'>-{author}-</h6>
                <button type='button' onClick={handleClick} className='button' style={{backgroundColor: `${color}`}}>New quote</button>
            </div>
        </div>
    );
};

export default Quotes;