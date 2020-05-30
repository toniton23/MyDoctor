import React from "react";
import { StyleSheet, Text, View } from "react-native";

const link = ({ title, size, align }) => {
  return (
    <View>
      <Text style={styles.link(size, align)}>{title}</Text>
    </View>
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
