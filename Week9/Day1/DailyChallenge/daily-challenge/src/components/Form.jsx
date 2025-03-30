import './Form.css'
import { useState } from 'react';
import FormDetails from './FormDetails.jsx';

const Form = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
      const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
      const newInputs = { ...inputs, [e.target.name]: value };
      setInputs(newInputs);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const searchParams = new URLSearchParams(inputs).toString();
      window.history.pushState(null, "", `?${searchParams}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <input placeholder='First Name' name="firstName" value={inputs.firstName} onChange={handleChange} className='textInput'/><br/><br/>
            <input placeholder='Last Name' name="lastName" value={inputs.lastName} onChange={handleChange} className='textInput'/><br/><br/>
            <input placeholder='Age' name="age" value={inputs.age} onChange={handleChange} className='textInput'/><br/><br/><br/>
            <input type='radio' name="gender" value="Male" checked={inputs.gender === "Male"} onChange={handleChange}/><span>Male</span><br/>
            <input type='radio' name="gender" value="Female" checked={inputs.gender === "Female"} onChange={handleChange}/><span>Female</span><br/><br/>
            <p className='smallHeading'>Select your destination</p>
            <select name="destination" value={inputs.destination} onChange={handleChange} className='selectInput'>
            <option value="">-- Please Choose A Destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            </select><br/><br/>
            <p className='smallHeading'>Dietary restrictions:</p>
            <input type='checkbox' name="nutsFree" checked={inputs.nutsFree} onChange={handleChange} className='checkboxOption'/><span>Nuts Free</span><br/>
            <input type='checkbox' name="lactoseFree" checked={inputs.lactoseFree} onChange={handleChange} className='checkboxOption'/><span>Lactose Free</span><br/>
            <input type='checkbox' name="vegan" checked={inputs.vegan} onChange={handleChange} className='checkboxOption'/><span>Vegan</span><br/><br/><br/>
            <input type='submit' value={'Submit'} className='submitBtn'/>
        </form><hr/>
        <FormDetails form={inputs}/>
        </>
    
    )
}

export default Form;