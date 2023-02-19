import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/users/users.operations";
import { selectUsers } from "redux/users/users.selectors";
import { UsersList } from "components/UsersList/UsersList";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    console.log(users);

    return (
        <>
            <Button text='Show Users' clickHandle={() => dispatch(getUsers())} />
            {users.length > 0 && <UsersList />}
        </>
    )
}

export default UsersPage;