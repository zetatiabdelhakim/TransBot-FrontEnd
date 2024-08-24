import React, { useState } from "react";
import "./styles/Conversation.css";
import send from "./imgs/send-message.png";
import Chat from "./Chat";

function Conversation() {
  const [inputValue, setInputValue] = useState("");
  const [chats, setChats] = useState([]);
  const [clickable, setClickable] = useState(true);

  const handleButtonClick = (text) => {
    if (!clickable) return; // Prevent setting input if not clickable
    setInputValue(text);
  };

  const handleQuestion = () => {
    if (!clickable || inputValue.trim() === "") return;
    const question = inputValue;
    setInputValue("");
    setChats([...chats, { question }]);
    setClickable(false); // Disable further input while loading
  };

  const handleChatDone = () => {
    setClickable(true); // Re-enable input after loading is complete
  };

  return (
    <div>
      <div className="conversation">
        {chats.length > 0 ? (
          <>
            {chats.map((chat, index) => (
              <Chat
                key={index}
                question={chat.question}
                setDone={handleChatDone}
              />
            ))}
          </>
        ) : (
          <>
            <p className="salam">Salam,</p>
            <p className="q">Kifach n9dar n3awenk f’safar dyalk?</p>
            <div className="buttons">
              <button
                className="suggestion"
                onClick={() =>
                  handleButtonClick("3etini ga3 les trains mn casa l rabat")
                }
              >
                3etini ga3 les trains mn casa l rabat
              </button>
              <button
                className="suggestion"
                onClick={() =>
                  handleButtonClick("chno ahsen trajet mn oujda l tanger")
                }
              >
                chno ahsen trajet mn oujda l tanger
              </button>
              <button
                className="suggestion"
                onClick={() =>
                  handleButtonClick("awel train mn rabat l kenitra")
                }
              >
                awel train mn rabat l kenitra
              </button>
            </div>
          </>
        )}
      </div>
      <div className="prompt">
        <input
          type="text"
          id="message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a prompt here ..."
          onKeyDown={(e) => {
            if (e.key === "Enter") handleQuestion();
          }}
          disabled={!clickable}
        />
        <img
          src={send}
          alt="Send"
          onClick={handleQuestion}
          style={{ cursor: clickable ? "pointer" : "not-allowed" }}
        />
      </div>
    </div>
  );
}

export default Conversation;
