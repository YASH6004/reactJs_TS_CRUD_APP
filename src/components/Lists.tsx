import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { getLists, setListToEdit, setListIdToDelete } from '../store/actions';
import { List } from '../store/types';

const Lists: FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.list.lists);

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  const setListToEditHandler = (id: string) => {
    dispatch(setListToEdit(id));
  } 

  const setListIdToDeleteHandler = (id: string) => {
    dispatch(setListIdToDelete(id));
  }

  return(
    <div className="panel " style={{width:'900px',flexWrap:'wrap',backgroundColor:'#fff'}}>
      <p className="panel-heading">Your Task</p>
      <div>
        { Object.keys(lists).length === 0
          ?
            <p className="py-4 has-text-centered">No Lists</p>
          :
            <div>
              {Object.values(lists).map((list: List) => {
                return <div className="panel-block py-3" key={list.id}>
                  <p onClick={() => setListToEditHandler(list.id)}>{list.name}</p>
                  <span className="panel-icon"style={{color:'#7b2cbf'}} onClick={() => setListIdToDeleteHandler(list.id)}>
                    <i className="fas fa-times-circle"></i>
                  </span>
                </div>
              })}
            </div>
        }
      </div>
    </div>
  );
}

export default Lists;