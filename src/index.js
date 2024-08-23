import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import Line from "./Line.js";
import Conversation from "./Conversation.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Line />
    <Conversation />
  </React.StrictMode>
);
