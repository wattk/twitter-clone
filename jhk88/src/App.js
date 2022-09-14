import { createContext } from 'react';
import Mockup from './page/Mockup';
import MockData from './data/CreateNewData';
// import MockData from './data/test.json';

export const DataContext = createContext();

function App() {
  const Data = MockData.data;

  return (
    <DataContext.Provider value={Data}>
      <Mockup />
    </DataContext.Provider>
  );
}

export default App;
