import { useState } from "react";

const CalcForm = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operation, setOperation] = useState('add')
    const [result, setResult] = useState(0);

    const num1 = Number(number1);
    const num2 = Number(number2);

    const handleOperation = (e) => {
        e.preventDefault();

        operation === 'add' 
        ? setResult(num1 + num2)
        : operation === 'sub'
        ? setResult(num1 - num2)
        : operation === 'mult'
        ? setResult(num1 * num2)
        : setResult(num1 / num2);
    };


    return (
        <>
            <h3>Calculation of Two Numbers</h3>
            <form>
                <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)}/>
                <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)}/><br/><br/>
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="add">Add Them!</option>
                    <option value="sub">Substract Them!</option>
                    <option value="mult">Multiply Them!</option>
                    <option value="div">Divide Them!</option>
                </select>
                <br/>
                <br/>
                <button type='submit' onClick={handleOperation}>Press for Result</button>
                <h1>{result}</h1>
            </form>
        
        </>
    );
};

export default CalcForm;