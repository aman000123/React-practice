import { useEffect, useState } from "react";

const FetchDataUseEffect = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setData(data))

    }, [])


    return (
        <ul>
            <h3>Fetch data using useEffect</h3>
            {data.map((item) => (
                <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
}


export default FetchDataUseEffect