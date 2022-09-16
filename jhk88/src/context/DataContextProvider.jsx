import React, { createContext, useState } from 'react';
import MockData from '../data/CreateNewData';
// import MockData from './data/test.json';

export const DataContext = createContext({
  data: MockData.data,
  setData: () => {},
});

function DataContextProvider({ children }) {
  const [data, setData] = useState(MockData.data);
  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataContextProvider;
