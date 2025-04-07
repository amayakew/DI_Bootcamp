import ReactDatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from './plannerSlice';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
    const activeDate = useSelector(state => state.plannerReducer.activeDate);
    const dispatch = useDispatch();

    const handleChange = (date) => {
        dispatch(setDate(date.toISOString()));
    };

    return (
        <>
            <ReactDatePicker selected={activeDate} onChange={(date) => handleChange(date)} />
        </>
    );
};

export default DatePicker;