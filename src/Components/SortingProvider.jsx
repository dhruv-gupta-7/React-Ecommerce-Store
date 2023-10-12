import React, { createContext, useContext, useState } from 'react';

const SortingContext = createContext();

export const useSortingContext = () => {
  return useContext(SortingContext);
};

export const SortingProvider = ({ children }) => {
  const [sortOrder, setSortOrder] = useState('');

  const updateSortOrder = (order) => {
    setSortOrder(order);
  };

  return (
    <SortingContext.Provider value={{ sortOrder, updateSortOrder }}>
      {children}
    </SortingContext.Provider>
  );
};

export default SortingProvider;
