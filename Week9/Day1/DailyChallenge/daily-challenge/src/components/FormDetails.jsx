import './FormDetails.css'

const FormDetails = (props) => {
    return (
        <div className='formDetails'>
            <h2>Entered Information</h2>
            <p>Your Name: {props.form.firstName} {props.form.lastName}</p>
            <p>Your Age: {props.form.age}</p>
            <p>Your Gender: {props.form.gender}</p>
            <p>Your Destination: {props.form.destination}</p>
            <p>Your Dietary Restictions:</p>
            <span>**Nuts Free: {props.form.nutsFree ? 'Yes' : 'No'}</span><br/>
            <span>**Lactose Free: {props.form.lactoseFree ? 'Yes' : 'No'}</span><br/>
            <span>**Vegan Meal: {props.form.vegan ? 'Yes' : 'No'}</span>
        </div>
    )
}

export default FormDetails