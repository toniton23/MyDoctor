import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Massages = () => {
  return (
    <View style={styles.container}>
      <Text>Massages page</Text>
    </View>
  );
};

export default Massages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
