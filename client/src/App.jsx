import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { API_KEY } from "./constants/constants";
import ChannelListContainer from "./components/Channel/ChannelListContainer";
import ChannelContainer from "./components/Channel/ChannelContainer";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import 'stream-chat-react/dist/css/index.css'
import "./styles/index.css";

const App = () => {
  const [createType, setCreateType] = useState("");
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
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
      <Chat client={client} theme="theme light">
        <div className="container" style={{ display: "flex" }}>
          <ChannelListContainer
            creating={creating}
            setCreating={setCreating}
            editing={editing}
            setEditing={setEditing}
            setCreateType={setCreateType}
          />
          <ChannelContainer
            creating={creating}
            setCreating={setCreating}
            editing={editing}
            setEditing={setEditing}
            createType={createType}
          />
        </div>
      </Chat>
    </div>
  );
};

export default App;
