import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { FaithExamplesPage } from "./pages/FaithExamplesPage";
import { SingleFaithExample } from "./pages/SingleFaithExample";
import { MiraclesPage } from "./pages/MiraclesPage";
import { SingleMiracle } from "./pages/SingleMiracle";
import { MessageList } from "./pages/MessageList";
import LongTextsPage from "./pages/LongTextsPage";
import { SingleLongText } from "./pages/SingleLongText";

export function RouterComponent() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="faith-examples-page" element={<FaithExamplesPage />} />
                    <Route path="single-faith-example/:id" element={<SingleFaithExample />} />
                    <Route path="miracles-page" element={<MiraclesPage />} />
                    <Route path="single-miracle/:id" element={<SingleMiracle />} />
                    <Route path="message-list" element={<MessageList />} />
                    <Route path="long-texts-page" element={<LongTextsPage />} />
                    <Route path="long-text/:id" element={<SingleLongText />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
