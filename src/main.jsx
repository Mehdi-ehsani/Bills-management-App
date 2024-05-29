import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/font.css";

import { Provider } from "react-redux";
import store from "./app/store/store.js";

import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Provider store={store}>
			<Layout>
				<App />
			</Layout>
		</Provider>
	</BrowserRouter>
);
