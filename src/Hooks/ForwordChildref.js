

import { forwardRef } from "react"
const ChildRef = forwardRef((props, ref) => {
    console.log("props in child with forword ref use", props, ref)
    return (
        <input type="text" ref={ref} />
    )
})

export default ChildRef

