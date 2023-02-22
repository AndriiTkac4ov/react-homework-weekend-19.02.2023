// import { Button } from "../../components/Button/Button";
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getUser } from "redux/users/users.operations";
import { selectUser } from "../../redux/users/users.selectors";

const UserDetailsPage = () => {
    const [currentId, setCurrentId] = useState('');
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const { id } = useParams();

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const closeModal = () => {
        setCurrentId('');
    }
        
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
                <button type="button" onClick={() => { setCurrentId(id) }}>Delete User</button>
                <Link to={`/users/update/${id}`} state={user}>Update User</Link>
                </div>)}
            {currentId && <Modal id={currentId} onCloseModal={closeModal} />}
        </>
    )
}

export default UserDetailsPage;