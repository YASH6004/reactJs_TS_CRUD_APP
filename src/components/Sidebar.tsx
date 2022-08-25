import React, { FC } from 'react';

import CreateNewList from './CreateNewList';
import Lists from './Lists';

const Sidebar: FC = () => {
  return (
    <div className="column" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}>
      <CreateNewList />
      <Lists />
    </div>
  );
}

export default Sidebar;