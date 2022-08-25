import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { RootState } from './store/store';
import DeleteListModal from './components/DeleteListModal';
import EditListModal from './components/EditListModal';

const App: FC = () => {

  const listIdToDelete = useSelector((state: RootState) => state.list.listIdToDelete);
  const listToEdit = useSelector((state: RootState) => state.list.listToEdit);
  const taskToEdit = useSelector((state: RootState) => state.list.taskToEdit);
  const taskToDelete = useSelector((state: RootState) => state.list.taskToDelete);

  return (
    <div className="App" style={{ backgroundColor: '#3c096c', display: 'flex', height: '100vh' }}>

      <div className="container px-115" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

        <Sidebar />

      </div>

      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
      {listToEdit && <EditListModal list={listToEdit} />}

    </div>
  );
}

export default App;
