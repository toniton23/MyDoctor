import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Input, Button, Gap, BackButton } from "../components";
import { Doctor } from "../asset/img";
import { colors } from "../utils/colors";

const Login = ({ onPress, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BackButton onPress={() => navigation.navigate("GetStarted")} />
        <Image source={Doctor} style={styles.image} />
        <Text style={styles.header}>Register</Text>
      </View>
      <View style={styles.bottom}>
        <View>
          <View style={{ marginTop: -20 }}>
            <Input label="Full Name" />
            <Gap height={24} />
            <Input label="Pekerjaan" />
            <Gap height={10} />
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={20} />
          </View>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("UploadPhoto")}
          />
        </View>
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
  },
  top: {
    height: "25%",
    width: "100%",
    backgroundColor: colors.default,
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
    backgroundColor: colors.default,
  },
});
