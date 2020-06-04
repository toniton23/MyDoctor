import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Input, Button, Gap, BackButton } from "../components";
import * as Animatable from "react-native-animatable";
import { Shay, Btnx } from "../asset/img";
import { colors } from "../utils/colors";
import { ScrollView } from "react-native-gesture-handler";

const Login = ({ onPress, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.header}>
          <Text style={styles.profile}>Edit your profile</Text>
          <Gap height={15} />
          <Image source={Shay} style={styles.image} />
          <Image source={Btnx} style={styles.BtnPlus} />
          <Gap height={30} />
        </View>
        <Gap width={25} />
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.bottom}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
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
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: { justifyContent: "center", alignItems: "center" },
  BtnPlus: {
    position: "absolute",
    bottom: 25,
    left: 120,
    width: 40,
    height: 40,
  },
  image: { height: 110, width: 110, borderRadius: 110 / 2, marginLeft: 15 },
  profile: {
    fontSize: 20,
    fontWeight: "bold",
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
    paddingLeft: 20,
  },
  bottom: {
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
