import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeProvider } from './FontContext';
import { ColorProvider } from './ColorContext';


const ParentContainer = () => {
  return (
    <ColorProvider>
      <ChildContainer />
    </ColorProvider>
  );
};

export default ParentContainer;