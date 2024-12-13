

import Input from "./reuseable"
const FormUsingReuseable = () => {

    return (
        <>
            <div>
                <Input type="text" label="Fname" />
            </div>
            <div>
                <Input type="text" label="Lname" />
            </div>
            <div>
                <Input type="password" label="Password" />
            </div>
            <div>
                <Input type="telephone" label="Contact number" />
            </div>



        </>
    )
}

export default FormUsingReuseable