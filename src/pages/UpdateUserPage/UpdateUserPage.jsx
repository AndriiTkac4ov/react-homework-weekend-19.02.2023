import { UpdateUserForm } from "components/UpdateUserForm/UpdateUserForm";
import { useLocation, useNavigate } from "react-router-dom";

export const UpdateUserPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.state.id;

    return (
        <>
            <button type="button" onClick={() => {navigate(`/users/${userId}`)}}>Go back</button>
            <UpdateUserForm />
        </>
    )
}