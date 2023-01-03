import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "stream-chat-react";
import SideBar from "../SideBar";
import Header from "../Header";
import ChannelSearch from "./ChannelSearch";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

const ChannelListContainer = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <Header />
        <ChannelSearch />
        <ChannelList
          // filters={{}}
          // channelRenderFilterFn={{}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          // filters={{}}
          // channelRenderFilterFn={{}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </div>
  );
};

export default ChannelListContainer;
