import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import ResultPage from "./pages/ResultPage.tsx";
import CreateArticle from "./pages/CreateArticle.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ResultPage />} />
                <Route path="/create/new" element={<CreateArticle />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App