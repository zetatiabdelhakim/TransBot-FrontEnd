import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import "./styles/Chat.css";
import axios from "axios";
import Markdown from "markdown-parser-react";

function Chat({ question, setDone }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [style, setStyle] = useState({});

  const fetchResponse = async (question) => {
    try {
      const res = await axios.get(`http://localhost:5000/question/${question}`);
      setResponse(res.data.response);
      setDone(true);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Something goes wrong, please try again");
      setIsLoading(false);

      const isRTL = (text) =>
        /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(text);

      const direction = isRTL(response) ? "rtl" : "ltr";
      const textAlign = isRTL(response) ? "right" : "left";

      setStyle({ direction, textAlign });
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
      <p className="response" style={style}>
        {response ? <Markdown content={response} /> : <Loading />}
      </p>
    </div>
  );
}

export default Chat;
