import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../utils/colors";

const BUtton = ({ type, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.Text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BUtton;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "secondary" ? "white" : colors.default,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  Text: (type) => ({
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: type === "secondary" ? "#112340" : "white",
  }),
});
