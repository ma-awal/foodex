import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useApp = () => {
  const useApp = useContext(AppContext);
  return useApp;
};
