import { createContext, useState } from 'react';
import Mockup from './page/Mockup';
import MockData from './data/CreateNewData';
// import MockData from './data/test.json';

export const DataContext = createContext({
  data: MockData.data,
  setData: () => {},
});

function App() {
  const [data, setData] = useState(MockData.data);
  const value = { data, setData };

  return (
    <DataContext.Provider value={value}>
      <Mockup />
    </DataContext.Provider>
  );
}

export default App;
