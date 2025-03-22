'use client'
import { createContext, useState, useEffect } from 'react';

export const Adityatechcontext = createContext();

export function AdityatechProvider({children}){
  const [userdata,setUserData] = useState({
    name : '',
    phone : '',
    profession : ''
  });
  const [productdata, setProductData] = useState({
    PID: 0,
    ProductID: "",
    ProductName: "",
    SubcategoryID: 0,
    Description: "",
    CostPrice: 0,
    SellingPrice: 0,
    Discount: 0,
    VAT: 0,
    OpeningStock: 0,
    Pic: "",
  });
  
  return(
    <Adityatechcontext.Provider value = {{userdata,setUserData,productdata,setProductData}}>
      {children}
    </Adityatechcontext.Provider>
  );
}