import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CombinedComponent from './CombinedComponent';
import UnderstandingPage from './UnderstandingPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CombinedComponent />} />
                <Route path="/understanding" element={<UnderstandingPage />} />
            </Routes>
        </Router>
    );
}

export default App;