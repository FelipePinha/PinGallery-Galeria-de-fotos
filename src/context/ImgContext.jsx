import { createContext, useState } from "react";

export const ImgContext = createContext();

export const ImgProvider = ({ children }) => {
    const [images, setImages] = useState([]);

    return <ImgContext.Provider value={{ images, setImages }}>{children}</ImgContext.Provider>;
};
