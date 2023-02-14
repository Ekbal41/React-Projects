import React, { createContext, useState } from "react";

export const CalculetorContext = createContext();

const CalContext = ({ children }) => {

  const [calc, setCalc] = useState({
    opt: "",
    num: 0,
    result: 0,
  });

  const satateValue = {
    calc,
    setCalc,
  };

  return (
    <CalculetorContext.Provider value={satateValue}>
      {children}
    </CalculetorContext.Provider>
  );
};

export default CalContext;
