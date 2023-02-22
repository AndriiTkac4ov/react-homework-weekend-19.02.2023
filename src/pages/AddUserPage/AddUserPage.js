import { AddUserForm } from "components/AddUserForm/AddUserForm"
import { useNavigate } from "react-router-dom";

export const AddUserPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <button type="button" onClick={() => {navigate(`/users`)}}>Go back</button>
            <AddUserForm />
        </>
    )
}