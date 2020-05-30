import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Doctor = () => {
  return (
    <View style={styles.container}>
      <Text>Doctor page</Text>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
