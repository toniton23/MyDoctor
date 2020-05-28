import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";
import { Logo, Monas } from "./src/asset";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 100, height: 100 }} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: "#112340",
          marginTop: 20,
        }}
      >
        MyDoctor
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
