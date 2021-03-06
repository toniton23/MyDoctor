import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { Header, Button, Gap, Link } from "../components";
import { User, BtnPlus } from "../asset/img";
import { colors } from "../utils/colors";

const UploadPhoto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title="Upload Photo"
          onPress={() => navigation.navigate("GetStarted")}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
        <View style={styles.avatarWrapper}>
          <Image source={User} style={styles.avatar} />
          <Image source={BtnPlus} style={styles.BtnPlus} />
        </View>
        <Gap height={28} />
        <Text style={styles.name}>Jenifer Castelo</Text>
        <Gap height={4} />
        <Text style={styles.job}>Marketing Manager</Text>
        <Gap height={88} />
        <View style={styles.wrapperButton}>
          <Button
            title="Upload and Continue"
            onPress={() => navigation.replace("MainApp")}
          />
        </View>
        <Gap height={30} />
        <Link
          title="Skip for this"
          size={16}
          onPress={() => navigation.replace("MainApp")}
        />
      </Animatable.View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  wrapperButton: { width: "70%" },
  job: { fontSize: 18, fontWeight: "100", color: colors.secondary },
  name: { fontSize: 24 },
  BtnPlus: {
    position: "absolute",
    bottom: 8,
    right: 6,
    width: 40,
    height: 40,
  },
  avatar: { height: 110, width: 110 },
  avatarWrapper: {
    flexDirection: "row",
    marginTop: 50,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    height: "75%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  header: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
