import React from "react";
import ReactDOMClient from "react-dom/client";
import { PreviewExport } from "./screens/PreviewExport";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PreviewExport />);
