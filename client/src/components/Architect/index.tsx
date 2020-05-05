import * as React from 'react';
import ArchitectList from '../ArchitectList';
import ArchitectModal from '../ArchitectModal';

import './Architect.scss';

const ArchitectComponent: React.FC<{}> = () => {
  return (
    <div className="main-wrapper">
      <ArchitectModal />
      <ArchitectList />
    </div>
  )
};

export default ArchitectComponent;
