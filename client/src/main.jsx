import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

console.log("Main is rendering");

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthContextProvider>
            <SearchContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SearchContextProvider>
        </AuthContextProvider>
    </StrictMode>
);
