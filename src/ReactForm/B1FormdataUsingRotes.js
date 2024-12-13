// FormComponent.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        password: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log('formData', formData)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform any additional validation if needed before navigating to the next page.
        navigate('/submitted', { state: formData })
        // data locations state object  me aise aata hai
        //{
        //     fname: 'John',
        //     lname: 'Doe',
        //     password: 'examplepassword',
        //     email: 'john@example.com',
        //   }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>React form example send data using Routes and location</h1>
            <div>
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );


};

export default FormComponent;
