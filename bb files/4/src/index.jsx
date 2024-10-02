import React from "react";
import ReactDOMClient from "react-dom/client";
import { LogIn } from "./screens/LogIn";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LogIn />);
