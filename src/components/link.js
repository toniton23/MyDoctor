import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const link = ({ title, size, align, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default link;

const styles = StyleSheet.create({
  link: (size, align) => ({
    fontSize: size,
    color: "#7d8797",
    textDecorationLine: "underline",
    textAlign: align,
  }),
});
