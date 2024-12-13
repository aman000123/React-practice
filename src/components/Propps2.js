
import Prop3 from "./prop3"

const Prop2 = ({ name, handleChange, names }) => {
    console.log("prop2 component rerendering")
    return (
        <>

            <Prop3 name={name} handleChange={handleChange} names={names}></Prop3>

        </>
    )
}

export default Prop2