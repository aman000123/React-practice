

const Prop3 = ({ name, names, handleChange }) => {
    console.log("prop3 component rerendering")
    return (
        <>

            <h1>{name}==get in Prop 3 using prop drilling</h1>
            <h1>{names}</h1>
            <button onClick={handleChange}>Change name</button>

        </>
    )
}


export default Prop3



{/*
const Prop3 = ({ ...props }) => {
    console.log("prop3 component rerendering")
    return (
        <>
          
            <h1>{props.name}=-get in Prop 3 using prop drilling</h1>
            <h1>{props.names}</h1>
            <button onClick={props.handleChange}>Change name</button>

        </>
    )
}


export default Prop3

*/}