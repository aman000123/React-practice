
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./copm3";
import Comp4 from "./comp4";
import { useState } from "react";

const DropDown = () => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleOptioChange = (e) => {

        setSelectedOption(e.target.value)
        console.log("dropdown complonent name is ====>>>>" + e.target.value)

    }

    const renderSelectedOption = () => {
        switch (selectedOption) {
            case "option1":
                return <Comp1 />;
            case "option2":
                return <Comp2 />;
            case "option3":
                return <Comp3 />;
            case "option4":
                return <Comp4 />;
            default:
                return null
        }
    }
    return (
        <>
            <div>
                <select value={selectedOption} onChange={handleOptioChange}>
                    <option value="" >Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </select>
                {renderSelectedOption()}
            </div>
        </>
    )
}

export default DropDown