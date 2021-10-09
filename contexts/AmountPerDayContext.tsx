import { createContext, useState } from "react";

const defaultValue = '';

export const AmountPerDayProvider = (props: any): any => {
  const [amountPerDay, setAmountPerDay] = useState<string>(defaultValue);

  return (
    <AmountPerDayContext.Provider value={[amountPerDay, setAmountPerDay]}>
      {props.children}
    </AmountPerDayContext.Provider>
  );
};

export const AmountPerDayContext = createContext<any>({
  isLoading: false,
});