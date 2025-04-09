import ReactDatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
    const activeDate = useSelector(state => state.tasksReducer.activeDate);
    const dispatch = useDispatch();

    const setDate = (date) => {
        dispatch({
            type: 'SET_DATE',
            payload: date.toISOString()
        })
    };

    return (
        <>
            <ReactDatePicker selected={activeDate} onChange={(date) => setDate(date)} />
        </>
    );
};

export default DatePicker;