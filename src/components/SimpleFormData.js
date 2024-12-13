
import { useState } from "react"
const FormData = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('')

    const [data, setData] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
        //setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        // console.log("eee", e.target.value)
    }


    const handleOnFormSubmit = (e) => {
        e.preventDefault();
        console.log(`Hello my name is ${data.name}, and my email is ${data.email}`)
        console.log("data on form submit", data)

    }
    return (
        <>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <form onSubmit={handleOnFormSubmit}>
                <label>Name</label>
                <input type="text" onChange={handleChange} name="name" />
                <label>Email</label>
                <input type="email" onChange={handleChange} name="email" />
                <button>Submit</button>
            </form>


        </>
    )
}


export default FormData