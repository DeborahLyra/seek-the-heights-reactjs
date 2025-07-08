import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { FaithExamplesPage } from "./pages/FaithExamplesPage";
import { SingleFaithExample } from "./pages/SingleFaithExample";
import { MiraclesPage } from "./pages/MiraclesPage";




export function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/faith-examples-page" element={<FaithExamplesPage />} />
                    <Route path="/single-faith-example/:id" element={<SingleFaithExample />} />
                    <Route path="/miracles-page" element={<MiraclesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

