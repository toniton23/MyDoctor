import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../utils/colors";

const input = ({ label }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 10,
    padding: 12,
  },
});
