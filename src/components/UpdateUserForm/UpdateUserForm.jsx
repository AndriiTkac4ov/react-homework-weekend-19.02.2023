import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "redux/users/users.operations";

export const UpdateUserForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [editUser, setEditUser] = useState(location.state);
    
    const { name, avatar, email, phone } = editUser;

    const handleChange = ({target: { name, value}}) => {
        setEditUser(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = await dispatch(updateUser(editUser)).unwrap();
        navigate(`/users/${newUser.id}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Avatar
                <input
                    type="url"
                    name="avatar"
                    value={avatar}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone number
                <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Update user</button>
        </form>
    )
}