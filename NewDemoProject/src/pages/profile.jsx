import { Link } from "react-router-dom"

function Profile(){
    return(
        <>
        <h1>profile</h1>
        <Link to="/login">
        <h3>logout</h3>
        </Link>
        </>
    )
}
export default Profile