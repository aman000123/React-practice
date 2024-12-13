
import List from "./list"
const PackageList = () => {

    return (
        <>
            <List isPacked={true}
                name="maggi" />
            <List isPacked={false}
                name="pasta" />
            <List isPacked={true}
                name="momos" />
        </>
    )
}

export default PackageList


