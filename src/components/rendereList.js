import { useState } from "react"


const RenderedList = ({ items }) => {
    const [item, setItem] = useState([...items])

    const handleOnDelete = (itemId) => {
        const update = item.filter((it) => it.id !== itemId)
        setItem(update);
        console.log("deleted id===>", itemId)
        console.log("uodated lists ===>", update)
    }

    return (
        <>
            <ul>
                {item.map((item) => (
                    <li key={item.id}> {item.name}<button onClick={() => handleOnDelete(item.id)}>Delete</button></li>

                ))}
            </ul>


        </>
    )
}

export default RenderedList