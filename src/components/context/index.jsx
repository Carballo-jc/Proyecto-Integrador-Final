/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import data from "../../assets/dataConfig.json"

const Context = createContext();

const ContextProveedor = ({ children } )=> {
  const [state, setState] = useState({});
  useEffect(() => {
    setState(prev => ({...prev, data}))
  },[]);
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export { Context, ContextProveedor };
