import React from 'react';
import TabsComponent, { Tab } from './components/TabsComponent';
import ArchitectComponent from './components/Architect';
import BuildingList from './components/BulidingList';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.scss';

const tabs: Tab[] = [
  { name: 'Architects', component: ArchitectComponent},
  { name: 'Buildings', component: BuildingList }
];

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <TabsComponent tabs={tabs} />
      </div>
    </ApolloProvider>
  );
}

export default App;
