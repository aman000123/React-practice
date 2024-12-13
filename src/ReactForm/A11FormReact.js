// src/components/Form.js

import { useEffect, useState, useRef } from 'react';
import InputField from './A11inputfield';
import ShowRecord from './A11showRecord';


const FormsReact = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [formShow, setFormshow] = useState(true)
    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName === "" && formData.lastName === "" && formData.email === ""
            && formData.password === "") {
            console.log("empty value")
            alert("Please fill all fields")
            // setFormshow(true)
            return false
        }
        console.log(formData);
        setFormshow(false);
    };

    return (
        <>
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <h1>React form example send data using props</h1>
            {
                formShow ?
                    (<form onSubmit={handleSubmit}>
                        <InputField
                            label="First Name:"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Last Name:"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email:"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Password:"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button type="submit">Submit</button>

                    </form>)

                    : <ShowRecord formData={formData} />}



            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
        </>
    );
};

export default FormsReact;


/*
It seems like the issue with the double rendering is due to the way React re-renders components and updates their state. When you submit the form, the handleSubmit function sets showRecord to true, which triggers a re-render of the component. Since the state of showRecord has changed, the component re-renders, and the ShowRecord component is rendered with showRecord being true.

However, this is not the final state update. The useEffect hook runs after the re-render, and it navigates to the /data route, which might cause another re-render of the entire application if the navigation results in a component change.

To avoid this double rendering issue, you can use the useEffect hook with an empty dependency array to trigger navigation only after the initial render. Additionally, you can use the useRef hook to store the current value of the form data and use it inside the useEffect for navigation. Here's the updated code:


  const handlechange = (e) => {
        setForm((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
*/

