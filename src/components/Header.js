import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { BackButton } from "../components";
import { Doctor } from "../asset/img";
import { colors } from "../utils/colors";

const Login = ({ onPress, navigation, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BackButton onPress={onPress} />
        <Image source={Doctor} style={styles.image} />
        <Text style={styles.header}>{title}</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: { height: 210, width: 150, marginTop: -20 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    marginRight: 110,
    color: "white",
    maxWidth: 200,
    marginLeft: -10,
  },
  top: {
    height: 200,
    width: "100%",
    backgroundColor: colors.default,
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 10,
  },
});
