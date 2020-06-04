import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { Input, Link, Button, Gap } from "../components";
import { Doctor } from "../asset/img";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={Doctor} style={styles.image} />
        <Text style={styles.header}>Sign in and start consultation</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.bottom}>
        <View>
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button
            title="Sign In"
            onPress={() => navigation.replace("MainApp")}
          />
          <Gap height={60} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </Animatable.View>
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
    color: "white",
    maxWidth: 200,
  },
  top: {
    height: "25%",
    width: "100%",
    backgroundColor: "#0BCAD4",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 40,
  },
  bottom: {
    height: "75%",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    padding: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#0BCAD4",
  },
});
