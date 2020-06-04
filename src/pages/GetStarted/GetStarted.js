import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Logo, Background } from "../../asset";
import { Button, Gap } from "../../components";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.image}>
      <View style={styles.container}>
        <View>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.text}>
            Consultation with a doctor is easier and more flexible
          </Text>
        </View>
        <View>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("Register")}
          />
          <Gap height={16} />
          <Button
            type="secondary"
            title="Sign In"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  image: { height: "100%", width: "100%" },
  logo: { width: 100, height: 100 },
  container: {
    padding: 40,
    justifyContent: "space-between",

    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
    marginTop: 91,
  },
});
