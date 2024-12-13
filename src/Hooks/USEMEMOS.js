import { useCallback, useState } from "react"


import SubmitButton11 from "./USEMEMOS1"


{/*
const SubmitButton11 = () => {
    return (

        <> {console.log("hello submit button1")}
            <button>SUBMIT</button>
        </>
        //<button>Changes Text</button>  when we click this button then this component also rerendered while in this component no state availables

        //in smart application this will no issue but in large application issue will

        //so we have option to use useMemo hooks

        //memo== us component ka state memoized kar lega state change nhi to rerendered bhi nhi isiliye

        //usememo ka use karte initially rerenderd only 
    )
}


const TextToDisplays = ({ text }) => {
    return (
        <>{console.log("Text to dispaly rerendered")}
            <p> {text}</p>
        </>
    )

}

const MainUseMemo = () => {

    const [textToDisplays, setTextToDisplays] = useState("initial state im Mainusememo")


    // //when state is changed then component rerendered virtual dom changed according to actual dom also changed


    // //when we click on  <button>Changes Text</button>   then   state will chnged and component willl rerndered 


    return (
        <>
        

            <h1>USEMEMOS practice start</h1>
            <SubmitButton11 label="Submit button usememo"/>
            <TextToDisplays text={textToDisplays} />
            <button onClick={() => setTextToDisplays("Changes to text")}>Changes Text</button>
            <h1>USEMEMOS practice end</h1>
        </>
    )
}


export default MainUseMemo



//but if MainUseMemo ki state change ho rahi ho to kewal wahi component rerender kare na ki submitbutton kare uske state me change to hua hi nhi


//so memo state ko mind kar leta hai change hua to hi rerender hoga nhi to nhi
*/}







const TextToDisplays = ({ text }) => {
    return (
        <>{console.log("Text to dispaly rerendered")}
            <p> {text}</p>
        </>
    )

}

const MainUseMemo = () => {

    const [textToDisplays, setTextToDisplays] = useState("initial state im Mainusememo")
    //when state is changed then component rerendered vertual dom changed according to actual dom also changed

    //when we click on  <button>Changes Text</button>   then   state will chnged and component willl rerndered 




    // const onSubmit = () => {
    //     console.log("hello from sumbit button rerenderd")
    // }

    //when  we pass onSubmit which is non primtive data type so we use  callback


    const onSubmit = useCallback(() => {
        console.log("hello from sumbit button rerenderd")
    }, [])


    //ab kewal    <TextToDisplays text={textToDisplays} />  yahi component rerendered hoga   <button>Changes Text</button>  ispr click karne se 



    // The useCallback hook is used in React to memoize and optimize functions, particularly callback functions, so that they don't get recreated on every render. This can help improve the performance of your React components, especially when passing callbacks as props to child components.



    return (
        <>
            {/* <SubmitButton11 label="Submitttt"  />   bina event onSubmit ko pass kare dekhte hai to rerendered nhi karta memo ke sath*/}

            <h1>USEMEMOS practice start</h1>
            <SubmitButton11 label="Submit button usememo" onSubmit={onSubmit} />
            <TextToDisplays text={textToDisplays} />
            <button onClick={() => setTextToDisplays("Changes to text")}>Changes Text</button>
            <h1>USEMEMOS practice end</h1>
        </>
    )
}


export default MainUseMemo