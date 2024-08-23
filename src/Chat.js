import React from "react";
import Loading from "./Loading";
import "./styles/Chat.css"

function Chat({ question, reponse }) {
  return (
    <div className="Chat">
      <p className="question">{question}</p>
      <p className="reponse">{reponse || <Loading />}</p>
    </div>
  );
}

export default Chat;
