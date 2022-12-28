import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { API_KEY } from "./constants/constants";
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";
import "./styles/index.css";

const App = () => {
  const client = StreamChat.getInstance(API_KEY);
  const authToken = false;
  if(!authToken) return <Auth />
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="theme dark">
        <div className="container" style={{ display: "flex" }}>
          <ChannelListContainer />
          <ChannelContainer />
        </div>
      </Chat>
    </div>
  );
};

export default App;
