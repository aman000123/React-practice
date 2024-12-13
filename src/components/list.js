

const List = ({ name, isPacked }) => {

    // if (isPacked) {
    //     return <li>{name}****</li>
    // }
    // return <li>{name}</li>

    return (
        <li key={name}>

            {/* {name} {isPacked && ' ✔'} */}

            {isPacked ? name + ' ✔' : name}

            {/* {isPacked ? (<del>{name + ' ✔'}</del>) : (name)} */}
        </li>
    )


}

export default List