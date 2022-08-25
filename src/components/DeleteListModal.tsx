import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { getListById, deleteList, setListIdToDelete } from '../store/actions';

interface DeleteListModalProps {
  listId: string;
}

const DeleteListModal: FC<DeleteListModalProps> = ({ listId }) => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list.listById);

  useEffect(() => {
    dispatch(getListById(listId));
  }, [dispatch, listId]);

  const deleteListHandler = () => {
    dispatch(deleteList(listId));

  }

  const hideModalHandler = () => {
    dispatch(setListIdToDelete(''));
  }

  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={hideModalHandler}></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title">Are you sure you want to delete this Task ?</p>
        </header>
        <footer className="modal-card-foot" style={{display:'flex',justifyContent:'center'}}>
          <button type="button" className="button is-danger" onClick={deleteListHandler}>Delete</button>
          <button type="button" className="button" onClick={hideModalHandler}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default DeleteListModal;