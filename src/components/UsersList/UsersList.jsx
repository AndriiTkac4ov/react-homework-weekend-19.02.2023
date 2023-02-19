import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUsers } from 'redux/users/users.selectors';

export const UsersList = () => {
    const users = useSelector(selectUsers);
    console.log(users);

    return (
        <ul>
        {users.map(({ id, name }) => {
            return (
                <li key={id}>
                    <Link>{name}</Link>
                </li>
            );
        })}
        </ul>
    );
};
