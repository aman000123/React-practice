import { people } from "./data";


const ShowData = () => {

    const chemist = people.filter(item =>
        item.profession === 'chemist',
    )
    const listItems = chemist.map(it =>
        <li key={it.id}><span>{it.name}==$$</span>
            <span>{it.profession}</span>
        </li>
    )
    return (
        <>
            <ul>
                <h5>Only chemist profession show</h5>
                <li>{listItems}</li>
                {/* {people.map(item => (

                    <li key={item.id}> {item.name}
                        <p> {item.profession}</p>
                    </li>
                ))} */}

            </ul>


        </>
    )
}

export default ShowData