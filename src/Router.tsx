import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { FaithExamplesPage } from "./pages/FaithExamplesPage";




export function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/faith-examples-page" element={<FaithExamplesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

