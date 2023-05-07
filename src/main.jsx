import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ImgProvider } from "./context/imgContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ImgProvider>
            <App />
        </ImgProvider>
    </React.StrictMode>
);
