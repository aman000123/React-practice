
import { useState, useEffect } from "react";

const FetchData = () => {
    const [users, setUsers] = useState([])

    const fetchUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log("responses===>", response)
        const data = await response.json();
        console.log("response with useEffect with fetch===>", data)
        setUsers(data);
    }
    //     console.log("fetched user===", fetchUser())
    //this return pending promise 
    //   fetched user=== Promise {<pending>}
    // FetchDataFromApi.js:14 fetched user=== Promise {<pending>}
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <>
            <h4>FetchData using useEffect</h4>
            <ul> {users.map((item) => (
                <li key={item.id}>
                    <p> Name=  {item.name}</p>
                    <p>website= {item.website}</p>
                </li>
            ))}
            </ul>
        </>
    )
}
export default FetchData