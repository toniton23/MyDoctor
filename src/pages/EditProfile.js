import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Input, Button, Gap, BackButton } from "../components";
import * as Animatable from "react-native-animatable";
import { Shay, Btnx } from "../asset/img";
import { colors } from "../utils/colors";

const Login = ({ onPress, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{ marginLeft: 20 }}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={{ marginTop: -50, justifyContent: "center" }}>
          <Text style={styles.header}>Edit your profile</Text>
          <Gap height={15} />
          <View>
            <Image source={Shay} style={styles.image} />
            <Image source={Btnx} style={styles.BtnPlus} />
          </View>
        </View>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.bottom}>
        <View>
          <View style={{ marginTop: -20 }}>
            <Input label="Full Name" />
            <Gap height={16} />
            <Input label="Pekerjaan" />
            <Gap height={16} />
            <Input label="Email Address" />
            <Gap height={16} />
            <Input label="Password" />
            <Gap height={16} />
          </View>
          <Button
            title="Save Profile"
            onPress={() => navigation.goBack("UserProfile")}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  BtnPlus: {
    position: "absolute",
    bottom: 8,
    left: 100,
    width: 40,
    height: 40,
  },
  image: { height: 110, width: 110, borderRadius: 110 / 2, marginLeft: 15 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 130,
    color: "white",
    maxWidth: 200,
  },
  top: {
    height: "30%",
    width: "100%",
    backgroundColor: colors.default,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40,
  },
  bottom: {
    height: "70%",
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
