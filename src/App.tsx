import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import ResultPage from "./pages/ResultPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ResultPage />} />
                {/*<Route path="result" element={<} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App