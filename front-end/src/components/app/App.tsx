import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { environment } from '../../relay';
import ProductList from '../product/ProductList';

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={environment} >
      <div className="App">
        <h2>test</h2>
        <ProductList />
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
