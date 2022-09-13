import { createContext } from 'react';
import Mockup from './page/Mockup';
import importedData from './data/mockData.json';

export const DataContext = createContext();

function App() {
  const Data = importedData.data;
  Data.sort(function (a, b) {
    return new Date(b.info.date) - new Date(a.info.date);
  });
  return (
    <DataContext.Provider value={Data}>
      <Mockup />
    </DataContext.Provider>
  );
}

export default App;
