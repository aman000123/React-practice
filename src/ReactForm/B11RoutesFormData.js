

/*

useLocation: The useLocation hook is also introduced in React Router version 6. It returns the current location object, which includes information about the current URL and the state passed through the navigate function. 

In this code, useLocation is used in the SubmittedData component to access the data passed through the navigate function from the B11FormComponent. The state object in the location contains the form data submitted from the previous page.



const location = useLocation(): This line initializes a variable location using the useLocation hook. This hook gives us access to the current location object, which contains various properties related to the current URL.



const { state } = location; This line uses destructuring assignment to extract the state property from the location object. The state property holds any state data that was passed during navigation using the navigate function, as we explained in the previous answer.



const { fname, lname, password, email } = state || {};: This line uses destructuring assignment again to extract individual properties from the state object. It creates separate variables fname, lname, password, and email, which are assigned the corresponding values from the state object.



*/


import { useLocation, useNavigate } from 'react-router-dom';

const SubmittedData = () => {

    const location = useLocation()
    const { state } = location;

    const { fname, lname, password, email } = state || {};
    console.log('location,state==>', location.state)

    const navigate = useNavigate()
    const handleEditClick = () => {
        // Navigate to the EditForm component with the data to be edited.
        navigate('/edit', { state: { fname, lname, password, email } });
    };
    const handleDeleteClick = (e) => {
        console.log("delete record ", e.target)
    }
    return (
        <div>
            <h2>Submitted Data</h2>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Password: {password}</p>
            <p>Email: {email}</p>
            <button onClick={handleEditClick}>Edit Record</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
};

export default SubmittedData;
