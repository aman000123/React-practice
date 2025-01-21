import { memo, useState } from "react";




const EmpProfile = memo(({ name, email }) => {

    return (
        <>
            {console.log("EmpProfile rendered with memo!")}
            <p>
                name:{name}
            </p>
            <p>
                email:{email}
            </p>
        </>
    )
})

// const EmpProfile = ({ name, email }) => {

//     return (
//         <>
//             {console.log("EmpProfile rendered with memo!")}
//             <p>
//                 name:{name}
//             </p>
//             <p>
//                 email:{email}
//             </p>
//         </>
//     )
// }


// if we no use  memo in Empprofile component then in registration component if email state change then also empprofile component also  re render while i not pass emaail props that componet  but if we use memo then only name state change then only empprofile component re render



const RegisterationFormPureComPonent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <>
            <h3>Registeration form</h3>
            <label>Enter your name</label>
            <input type="text" placeholder="Enter your name" value={name}
                onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Enter your Email</label>
            <input type="email" placeholder="Enter your email" value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <EmpProfile name={name} />
        </>
    )
}

export default RegisterationFormPureComPonent


// In your code, memo is used to optimize the EmpProfile component by preventing unnecessary re-renders when its props haven't changed.

// ===============================What does memo do?

// memo is a higher-order component (HOC) from React that memoizes a component, meaning it will only re-render if its props change. This improves performance by avoiding unnecessary re-renders.

// The EmpProfile component is wrapped with memo(), which means it won’t re-render unless name or email changes.


// When is memo useful?
// When a component receives the same props frequently and re-rendering it is expensive (e.g., heavy calculations, complex UI).
// If EmpProfile was inside a large component tree, preventing unnecessary renders would improve performance.
// In simple components, memo might not provide noticeable benefits.