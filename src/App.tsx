import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ResultPage from "./pages/resultPage";
import './App.css';

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