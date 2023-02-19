import { Button } from "components/Button/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUser } from "redux/users/users.operations";
import { selectUser } from "../../redux/users/users.selectors";

const UserDetailsPage = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const { id } = useParams();

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
        
    useEffect(() => {
        dispatch(getUser(id));
    }, [id, dispatch])

    return (
        <>
            {user &&
            (<div>
                <button type="button" onClick={()=>{navigate(location?.state?.from ?? "/")}}>Go back</button>
                <h1>{user.name}</h1>
                <img src={user.avatar} alt={user.name}/>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>)}
        </>
    )
}

export default UserDetailsPage;