import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Input, Button, Gap, BackButton } from "../components";
import * as Animatable from "react-native-animatable";
import { Doctor } from "../asset/img";
import { colors } from "../utils/colors";
import { useForm } from "../utils";
import { Fire } from "../config";

const Register = ({ onPress, navigation }) => {
  const [form, setForm] = useForm({
    fullName: "",
    profession: "",
    email: "",
    password: "",
  });

  const onContinue = () => {
    console.log(form);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        console.log("register success", success);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("error register:", errorMessage);
      });
    // navigation.navigate('UploadPhoto)
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BackButton onPress={() => navigation.navigate("GetStarted")} />
        <Image source={Doctor} style={styles.image} />
        <Text style={styles.header}>Register</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.bottom}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: -5 }}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm("fullName", value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan saya"
              value={form.profession}
              onChangeText={(value) => setForm("profession", value)}
            />
            <Gap height={10} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm("email", value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm("password", value)}
              secureTextEntry
            />
            <Gap height={20} />
          </View>
          <Button title="Continue" onPress={onContinue} />
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Register;

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
