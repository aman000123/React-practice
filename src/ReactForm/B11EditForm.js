// EditForm.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(location.state);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform the update operation and save the edited data.
        // For this example, we'll just navigate back to the SubmittedData page with the updated data.
        navigate('/submitted', { state: formData });
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditForm;
