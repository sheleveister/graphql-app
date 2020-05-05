import React, { useState } from 'react';
import cn from 'classnames';

import './Tabs.scss';

export type Tab = {
  name: string;
  component: React.FunctionComponent;
}

type Props = {
  tabs: Tab[],
}

const TabsComponent: React.FC<Props> = (props) => {
  const [selectedTab, setSelectedTab] = useState<Tab>(props.tabs[0]);

  return (
    <div className="wrapper">
      <div className="sidebar">
        {props.tabs.map((tab) => (
          <span key={tab.name}
            className={cn("tab", {"tab--active": tab.name === selectedTab.name})}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.name}
          </span>
        ))}
      </div>

      <div className="container">
        {React.createElement(selectedTab.component)}
      </div>
    </div>
  )
};

export default TabsComponent;
