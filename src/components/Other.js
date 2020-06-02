import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../utils/colors";
import Gap from "./Gap";
import { Toni } from "../asset";

const Other = ({ isMe }) => {
  return (
    <View style={styles.container}>
      <Image source={Toni} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Dokter, apakah memakan jeruk tiap hari itu buruk..?
          </Text>
        </View>
        <Text style={styles.date}>8.39 AM</Text>
      </View>
      <Gap height={20} />
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  wrapperChat: { flexDirection: "row" },
  avatar: { width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12 },
  container: {
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: 20,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.default,
    maxWidth: "80%",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: { fontSize: 14, color: "white" },
  date: { fontSize: 11, marginTop: 8, color: colors.secondary },
});
