import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { API_KEY } from "./constants/constants";
import ChannelList from "./components/ChannelList";
import ChannelContainer from "./components/ChannelContainer";
import "./styles/index.css";

const App = () => {
  const client = StreamChat.getInstance(API_KEY);
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="theme dark">
        <ChannelList />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
