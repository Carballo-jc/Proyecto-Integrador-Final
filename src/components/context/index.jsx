/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import data from "../../assets/dataConfig.json"

const Context = createContext();
const initialState = {
  data:{},
  tikets:{}
}
const ContextProveedor = ({ children } )=> {
  const [state, setState] = useState(initialState);

  const  getPrice = (price, discount) =>  {
    let totalPrice = price - (price * discount / 100);
    return totalPrice;
  }
  
  useEffect(() => {
    setState(prev => ({...prev, data:data}))
  },[]);
  return (
    <Context.Provider value={{ state, setState, getPrice }}>{children}</Context.Provider>
  );
};

export { Context, ContextProveedor };
