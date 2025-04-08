import { useSelector } from "react-redux";
import AgeControl from "./AgeControl";

const AgeDisplay = () => {
    const userAge = useSelector((state) => state.ageTrackerReducer.userAge);
    const loading = useSelector((state) => state.ageTrackerReducer.loading);

    if(loading === true) {
        return <h2>Loading...</h2>
    };

    if (userAge === ''){
        return <h2>Something went wrong. Try again later :(</h2>
    }

    return (
        <>
            <h2>Age Tracker</h2>
            <p><strong>Initial age:</strong> {userAge}</p>
            <AgeControl/>
        </>
    );
};

export default AgeDisplay;