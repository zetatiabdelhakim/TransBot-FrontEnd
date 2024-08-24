import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import "./styles/Chat.css";
import axios from "axios";
import Markdown from "markdown-parser-react";

function Chat({ question, setDone }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResponse = async (question) => {
    try {
      const res = await axios.get(`http://localhost:5000/question/${question}`);
      setResponse(res.data.response);
      setDone(true);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchResponse(question);
    }
  }, [question, isLoading]);

  return (
    <div className="Chat">
      <p className="question">{question}</p>
      <p className="response">
        {response ? <Markdown content={response} /> : <Loading />}
      </p>
    </div>
  );
}

export default Chat;
