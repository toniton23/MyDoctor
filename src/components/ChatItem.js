import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import Gap from "./Gap";
import { IsMe } from ".";
import Other from "./Other";

const ChatItem = ({ isMe }) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
