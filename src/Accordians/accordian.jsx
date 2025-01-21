
import { useState } from 'react'
import './accordian.css'

const Accordians = () => {

    const [clickedAccordion, setClickAccordian] = useState(null)

    const data = [
        {
            header: "Header1",
            content: "This is contents of first header"
        },
        {
            header: "Header2",
            content: "This is contents of second header"
        },
        {
            header: "Header3",
            content: "This is contents of third header"
        }, {
            header: "Header4",
            content: "This is contents of fourth header"
        },
        {
            header: "Header5",
            content: "This is contents of fifth header"
        },

    ]

    const handleClick = (i) => {
        // Toggle the clicked accordion
        console.log("index ix", i)
        console.log("clicked", clickedAccordion)
        if (clickedAccordion === i) {
            setClickAccordian(null); // Close the accordion if it's already open
        } else {
            setClickAccordian(i); // Open the clicked accordion
        }
    };

    //     Toggle Logic:

    // The handleClick function now checks if the clicked index is the same as clickedAccordion.
    // If they match, the accordion is closed (setClickAccordion(null)).
    // If they don't match, it sets the clickedAccordion to the clicked index.
    return (
        <div className="componentContainer">
            {data.map((item, index) => {
                return (
                    <div key={index} className="accordionContainer" onClick={() => handleClick(index)}>
                        <div className="accordionHeader">{item.header}</div>
                        {clickedAccordion === index && <div className="accordionBody">{item.content}</div>}
                    </div>
                );
            })}
        </div>
    );
};

export default Accordians