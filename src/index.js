// General React imports
import React from 'react';
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

// Project files
import App from './components/main/App';
import {store} from "./components/shared/Store/Store";

// CSS files
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);