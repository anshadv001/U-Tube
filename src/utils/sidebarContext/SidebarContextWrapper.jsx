import React, { useState } from 'react'
import { SidebarContext } from './contexts';

const SidebarContextWrapper = ({ children }) => {
    const [showLargeSidebar, setShowLargeSidebar] = useState(true);
    const [selected, setSelected] = useState(11);
  
    return (
      <SidebarContext.Provider value={{showLargeSidebar,setShowLargeSidebar,selected,setSelected}}>
        {children}
      </SidebarContext.Provider>
    );
  };

export default SidebarContextWrapper


