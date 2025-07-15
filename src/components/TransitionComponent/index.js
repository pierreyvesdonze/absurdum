// TransitionComponent.jsx
import React from 'react';
import Slide from '@mui/material/Slide';

const TransitionComponent = ({ children }) => {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        {children}
      </div>
    </Slide>
  );
};

export default TransitionComponent;
