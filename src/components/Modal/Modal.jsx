import { useDispatch } from "react-redux";
import { deleteUser } from "redux/users/users.operations";
import { ModalWindow, Overlay } from "./Modal.styled";


export const Modal = ({ id, onCloseModal }) => {
    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
        onCloseModal();
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