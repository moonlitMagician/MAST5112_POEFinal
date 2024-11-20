import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import menuData from "./menu.json";


interface MenuItem {
  name: string;
  description: string;
  price: number;
  course: string;
  image: string;
}


const MenuContext = createContext<{ menu: MenuItem[]; addMenuItem: (item: MenuItem) => void } | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  // adding json data to the context
  const [menu, setMenu] = useState<MenuItem[]>(menuData);

  const addMenuItem = (item: MenuItem) => {
    setMenu((prevMenu) => [...prevMenu, item]); 
  };

  return (
    <MenuContext.Provider value={{ menu, addMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
    
