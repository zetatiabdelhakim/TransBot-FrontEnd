import React, { useState } from "react";
import "./styles/Conversation.css";
import send from "./imgs/send-message.png";
import Chat from "./Chat";

function Conversation() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (text) => {
    setInputValue(text);
  };
  return (
    <div>
      <div class="conversation">
        {/* <p class="salam">Salam,</p>
        <p class="q">Kifach n9dar n3awenk f’safar dyalk?</p>
        <div class="buttons">
          <button
            class="suggestion"
            onClick={() =>
              handleButtonClick("3etini ga3 les trains mn casa l rabat")
            }
          >
            3etini ga3 les trains mn casa l rabat
          </button>
          <button
            class="suggestion"
            onClick={() =>
              handleButtonClick("chno ahsen trajet mn oujda l tanger")
            }
          >
            chno ahsen trajet mn oujda l tanger
          </button>
          <button
            class="suggestion"
            onClick={() => handleButtonClick("awel train mn rabat l kenitra")}
          >
            awel train mn rabat l kenitra
          </button>
        </div> */}
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        <Chat question={"3etini ga3 les trains mn casa l rabat"} reponse={`3etini ga3 les trains mn casa l rabat 3etini ga3 les trains mn casa l rabat${<br/>}3etini ga3 les trains mn casa l rabat${<br/>}`}/>
        
        
      </div>
      <div class="prompt">
        <input
          type="text"
          id="message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a prompt here ..."
        />
        <img src={send} alt="" />
      </div>
    </div>
  );
}

export default Conversation;
