import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../utils/colors";
import { ButtonSend } from ".";

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <TextInput style={styles.input} placeholder="Kirim pesan ke dokter" />
        <ButtonSend />
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  wrapperInput: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: { padding: 16 },
  input: {
    flex: 1,
    backgroundColor: colors.disable,
    paddingHorizontal: 20,
    borderRadius: 45,
    marginRight: 10,
    height: 50,
    backgroundColor: colors.disable,
    fontSize: 20,
  },
});
