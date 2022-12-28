import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { API_KEY } from "./constants/constants";
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import "./styles/index.css";

const App = () => {
  const cookies = new Cookies();
  const authToken = cookies.get("token");
  const client = StreamChat.getInstance(API_KEY);
  if (authToken) {
    client.connectUser(
      {
        id: cookies.get("userId"),
        name: cookies.get("username"),
        fullName: cookies.get("fullName"),
        image: cookies.get("avatarURL"),
        hashedPassword: cookies.get("hashedPassword"),
        phoneNumber: cookies.get("phoneNumber"),
      },
      authToken
    );
  }
  if (!authToken) return <Auth />;
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
