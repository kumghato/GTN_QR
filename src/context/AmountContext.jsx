import React, { createContext, useState } from "react";

export const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState("");

  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  );
};
