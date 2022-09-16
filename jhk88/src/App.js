import React from 'react';
import DataContextProvider from './context/DataContextProvider';
import Mockup from './page/Mockup';

function App() {
  return (
    <DataContextProvider>
      <Mockup />
    </DataContextProvider>
  );
}

export default App;
