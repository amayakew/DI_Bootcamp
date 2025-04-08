import { useSelector, useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync, ageIncrement, ageDecrement } from "./ageTrackerSlice";

const AgeControl = () => {
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p><strong>Change it to your age:</strong> </p>
            <div style={{margin: '20px 0', display: 'flex', gap: '20px'}}>
                <button onClick={() => dispatch(ageIncrement())}> Age Up (+1) </button>
                <button onClick={() => dispatch(ageDecrement())}> Age Down (-1)</button> 
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
                <button onClick={() => dispatch(ageUpAsync())}> Age Up (Async) </button>
                <button onClick={() => dispatch(ageDownAsync())}> Age Down (Async) </button> 
            </div>
        </div>
    );
};

export default AgeControl;