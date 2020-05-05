import * as React from 'react';
import ArchitectList from '../ArchitectList';
import ArchitectModal from '../ArchitectModal';
import ArchitectModalDelete, { Data, initialData } from '../ArchitectModalDelete';
import { useState } from 'react';

import './Architect.scss';

const ArchitectComponent: React.FC<{}> = () => {
  const [data, setArchitectData] = useState<Data>(initialData);

  return (
    <div className="main-wrapper">
      <ArchitectModal />
      <ArchitectList
        handleDeleteCard={(id, name) => setArchitectData({ id, name })}
      />
      <ArchitectModalDelete
        data={data}
        setArchitectData={setArchitectData}
      />
    </div>
  )
};

export default ArchitectComponent;
