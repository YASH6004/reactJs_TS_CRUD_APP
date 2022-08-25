import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { List } from '../store/types';
import { addList,  } from '../store/actions';

const CreateNewList: FC = () => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState('');

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(listName.trim() === '') {
      return alert('List name is required!');
    }

    const newList: List = {
      id: `list-${new Date().getTime()}`,
      name: listName,
      tasks: []
    }

    dispatch(addList(newList));
    
    setListName('');
  }

  return(
    <div className="card mb-5"style={{borderRadius:'30px'}}>
    
      <div className="card-content">
        <form onSubmit={submitHandler}>
          <div className="field">
            <label className="label">ADD YOUR TODO</label>
            <div className="control">
              <input 
                type="text" 
                className="input"
                placeholder="write your task here..."
                name="listName"
                value={listName}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="control" style={{display:"flex",justifyContent:'center',marginTop:'2rem'}}>
            <button type="submit" className="button" style={{backgroundColor:'#7b2cbf',color:'#fff'}}>Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewList;