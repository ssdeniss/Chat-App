import React from "react";
import { Channel, useChatContext, MessageSimple  } from "stream-chat-react";
import CreateChannel from "./CreateChannel";
import EditChannel from "./EditChannel";
import TeamMessage from "../TeamMessage";
import ChannelInner from "./ChannelInner";

const ChannelContainer = ({
  creating,
  setCreating,
  editing,
  setEditing,
  createType,
}) => {
  const { channel } = useChatContext();
  if (creating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setCreating={setCreating} />
      </div>
    );
  }
  if (editing) {
    return (
      <div className="channel__container">
        <EditChannel setEditing={setEditing} />
      </div>
    );
  }
  const EmptyState = () => {
    <div className="channel-empty__container">
      <div className="channel-empty__first">
        This is beginning of your chat history.
      </div>
      <div className="channel-empty__second">
        Send messages, attachments, links, emojis, and more!
      </div>
    </div>;
  };
  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(mesageProps, i) => <MessageSimple key={i} {...mesageProps} />}
      >
        <ChannelInner setEditing={setEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
