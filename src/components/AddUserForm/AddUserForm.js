import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "redux/users/users.operations";

export const AddUserForm = () => {
    const initialUserState = {
        name: '',
        avatar: '',
        email: '',
        number: '',
    }

    const [user, setUser] = useState(initialUserState);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = ({target: { name, value}}) => {
        setUser(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = await dispatch(addUser(user)).unwrap();
        navigate(`/users/${newUser.id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Avatar
                <input
                    type="url"
                    name="avatar"
                    value={user.avatar}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone number
                <input
                    type="tel"
                    name="number"
                    value={user.number}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Add new user</button>
        </form>
    )
}