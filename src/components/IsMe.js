import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import Gap from "./Gap";

const ChatItem = ({ isMe }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Dokter, apakah memakan jeruk tiap hari itu buruk..?
        </Text>
      </View>
      <Text style={styles.date}>8.39 AM</Text>
      <Gap height={20} />
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: { alignItems: "flex-end" },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.cardLight,
    maxWidth: "70%",
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: { fontSize: 14 },
  date: { fontSize: 11, marginTop: 8, color: colors.secondary },
});
