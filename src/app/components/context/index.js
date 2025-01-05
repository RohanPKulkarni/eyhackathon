'use client'
import { createContext, useState, useEffect } from 'react';

export const Fininfocontext = createContext();

export function FinInfoProvider({children}){
  const [userdata,setUserData] = useState({
    name : '',
    phone : '',
    profession : ''
  });
  return(
    <Fininfocontext.Provider value = {{userdata,setUserData}}>
      {children}
    </Fininfocontext.Provider>
  );
}