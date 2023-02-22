import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "redux/users/users.operations";
import { ModalWindow, Overlay } from "./Modal.styled";


export const Modal = ({ id, onCloseModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteUser = () => {
        dispatch(deleteUser(id));
        onCloseModal();
        navigate('/users');
    }

    return (
        <Overlay>
            <ModalWindow>
                <p>Are you sure?</p>
                <ul>
                    <li>
                        <button type="button" onClick={handleDeleteUser}>Yes?</button>
                    </li>
                    <li>
                        <button type="button" onClick={onCloseModal}>No?</button>
                    </li>
                </ul>
            </ModalWindow>
        </Overlay>
    )
}