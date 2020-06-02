import React from "react";
import { IsMe } from ".";
import Other from "./Other";

const ChatItem = ({ isMe }) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
