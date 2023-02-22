import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/users/users.operations";
import { selectUsers } from "redux/users/users.selectors";
import { UsersList } from "components/UsersList/UsersList";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const UsersPage = () => {
    const [isListShown, setIsListShown] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    console.log(users);
    const location = useLocation();

    const handleShowList = () => {
        setIsListShown(true);
        dispatch(getUsers());
    }

    return (
        <>
            {isListShown ?
                <>
                    <UsersList location={location} />
                    <Link to='add' state={{from: location}}>Add user</Link>
                </> :
                <Button text='Show Users' clickHandle={handleShowList} />}
        </>
    )
}

export default UsersPage;