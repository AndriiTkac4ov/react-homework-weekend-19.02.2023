import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUsers } from 'redux/users/users.selectors';

export const UsersList = ({ location }) => {
  const [currentId, setCurrentId] = useState('');

    const users = useSelector(selectUsers);
    
    const closeModal = () => {
        setCurrentId('');
    }

  return (
    <>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={id} state={{ from: location }}>
                {name}
              </Link>
              <button
                type="button"
                onClick={() => {
                  setCurrentId(id);
                }}
              >
                Delete User
              </button>
            </li>
          );
        })}
      </ul>
          {currentId && <Modal id={currentId} onCloseModal={closeModal} />}
    </>
  );
};
