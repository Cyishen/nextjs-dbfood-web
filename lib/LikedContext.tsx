"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type LikedContextType = {
  liked: []; 
  setLikedData: (data: any) => void;
};

const LikedContext = createContext<LikedContextType>({
  liked: [],
  setLikedData: () => {},
});

export const LikedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [liked, setLiked] = useState<[]>([]);

  const setLikedData = (data:[]) => {
    setLiked(data);
  };

  return (
    <LikedContext.Provider value={{ liked, setLikedData }}>
      {children}
    </LikedContext.Provider>
  );
};

export const useLikedContext = () => {
  return useContext(LikedContext);
};
