import { createContext } from 'react';
import Mockup from './page/Mockup';
import Data from './data/mockData.json';

export const DataContext = createContext();

function App() {
  return (
    <DataContext.Provider value={Data.data}>
      <Mockup />
    </DataContext.Provider>
  );
}

export default App;
