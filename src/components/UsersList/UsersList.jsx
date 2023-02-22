
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUsers } from 'redux/users/users.selectors';

export const UsersList = ({ location }) => {
    const users = useSelector(selectUsers);

    return (
        <>
            <ul>
                {users.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            <Link to={id} state={{ from: location }}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
