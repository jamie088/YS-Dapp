import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/Routes";

const App = () => {
    return (
        <div className="sub-body">
            <Router>
                <Routes />
                <ToastContainer />
            </Router>
        </div>
    );
};

export default App;
