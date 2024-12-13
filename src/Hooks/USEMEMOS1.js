
import React from "react"

// in React, a memo is a higher-order component (HOC) or a hook that helps optimize functional components by preventing unnecessary re-renders. It's used to memoize the result of a component rendering so that if the component is called with the same props, it returns the previously computed result without re-rendering.


// In React, components re-render when their props or state change. However, sometimes a component might re-render even when its props remain the same, which can be inefficient, especially for complex components or components that render frequently.


// React's React.memo is a HOC that you  can wrap around a functional component to memoize its result. It works by shallowly comparing the previous props with the new props. If the props haven't changed, React.memo prevents the component from re-rendering and instead reuses the last rendered result



// It's important to note that React.memo performs a shallow comparison for props, so if props are objects or arrays, changes within those objects or arrays might not trigger a re-render if the reference to those objects or arrays remains the same.


/*
const SubmitButton11 = ({ label,  }) => {
    return (

        <> 
        {console.log("hello submit button1 rerendered")}
            <button >SUBMIT {label}</button>
        </>
        //<button>Changes Text</button>  when we click this button then this component (SubmitButton11) and {TextToDisplays}  also rerendered without memo
    )
}
//now use useMemo
export default React.memo(SubmitButton11)

*/


//ab jb hm event ya function ko as a props accept karke karte hain memo ke bad bhi rerendered ho raha hai component


//unnecesary component ko rerenderd se bchane ke liye memo ka use hota hai


//label="subittt"===> it is primtive data type
//submit={submit }===>  to ye non primetime data type hai


//then  onsubmit==onsubmit  does not equals



const SubmitButton11 = ({ label, onSubmit }) => {
    return (

        <> {console.log("hello submit button1 rerendered")}
            <button onClick={onSubmit}>SUBMIT {label}</button>


        </>
        //<button>Changes Text</button>  when we click this button then this component (SubmitButton11) not rerendered
    )
}
//now use useMemo
export default React.memo(SubmitButton11)