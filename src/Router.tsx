import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";




export function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
    )
}

