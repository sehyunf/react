import React from 'react';
import Animals from './Animals';
import { AnimalProvider } from './AnimalsContext';

// Provider
const AnimalsContainer = () => {
  return (
    <AnimalProvider>
      <Animals/>
    </AnimalProvider>
  );
};

export default AnimalsContainer;