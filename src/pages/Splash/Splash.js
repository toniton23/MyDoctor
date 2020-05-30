import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import "react-native-gesture-handler";
import { Logo } from "../../asset";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("GetStarted");
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>MyDoctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#112340",
    marginTop: 20,
  },
  logo: { width: 100, height: 100 },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
});
