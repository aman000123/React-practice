import { useEffect } from "react";


const ShowRecord = (props) => {
    const { formData } = props;
    console.log('formData in data show pages using props', formData)
    return (
        <>
            <h2>Record Details:</h2>
            <p>First Name: {formData?.firstName}</p>
            <p>Last Name: {formData?.lastName}</p>
            <p>Email: {formData?.email}</p>
            <p>Password: {formData?.password}</p>
        </>
    )
}

export default ShowRecord