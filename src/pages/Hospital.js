import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Hospital = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hospital page</Text>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
});
