

const Input = ({ type, label, name }) => {
    return (
        <>
            <label>{label}</label>
            <input type={type} name={name} />

        </>
    )
}

export default Input