
import { useState, useRef, useEffect } from "react"


const Search = () => {
    const [searchItem, setSearchItem] = useState("")
    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
        //console.log('ref.current.focus()', ref.current.focus())
    }, [])

    const handleSearch = (e) => {
        setSearchItem(e.target.value)
        // console.log('searchItem', searchItem)
    }


    const itemList = [
        "Apples",
        "Bananas",
        "Oranges",
        "Pineapples",
        "Grapes",
        "Watermelons",
    ]


    const filteredItems = itemList.filter((item) =>
        item.toLowerCase().includes(searchItem.toLowerCase())
    );
    console.log('filteredItems', filteredItems)

    return (
        <>
            <div>
                <input type="text" ref={ref} placeholder="Serch items" onChange={handleSearch} />
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index}>
                            <h3>{item}</h3></li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}
export default Search