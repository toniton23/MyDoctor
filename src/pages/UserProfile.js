import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { Header, Gap } from "../components";
import {
  Toni,
  Shay,
  Orang,
  Next,
  Translate,
  Bintang,
  Paper,
} from "../asset/img";
import { colors } from "../utils/colors";

const UploadPhoto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="User Profile" onPress={() => navigation.goBack()} />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
        <View style={styles.avatarWrapper}>
          <Image source={Shay} style={styles.avatar} />
        </View>
        <Gap height={16} />
        <Text style={styles.name}>Putri Melinda</Text>
        <Gap height={4} />
        <Text style={styles.job}>Marketing Manager</Text>
        <Gap height={26} />
        <TouchableOpacity
          style={styles.dex}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Image source={Orang} style={styles.thumb} />
          <View style={styles.wrapperDesc}>
            <Text style={styles.alum}>Edit Profile</Text>
            <Text style={styles.uni}>Last update yesterday</Text>
          </View>
          <Image source={Next} style={styles.next} />
        </TouchableOpacity>
        <Gap height={5} />
        <View style={styles.dex}>
          <Image source={Translate} style={styles.thumb} />
          <View style={styles.wrapperDesc}>
            <Text style={styles.alum}>Languanges</Text>
            <Text style={styles.uni}>Avalaible 12 languanges</Text>
          </View>
          <Image source={Next} style={styles.next} />
        </View>
        <Gap height={5} />
        <View style={styles.dex}>
          <Image source={Bintang} style={styles.thumb} />
          <View style={styles.wrapperDesc}>
            <Text style={styles.alum}>Give Us Rate</Text>
            <Text style={styles.uni}>On Google Play Store</Text>
          </View>
          <Image source={Next} style={styles.next} />
        </View>
        <Gap height={5} />
        <View style={styles.dex}>
          <Image source={Paper} style={styles.thumb} />
          <View style={styles.wrapperDesc}>
            <Text style={styles.alum}>Help Center</Text>
            <Text style={styles.uni}>Read our guidlines</Text>
          </View>
          <Image source={Next} style={styles.next} />
        </View>
        <Gap height={5} />
      </Animatable.View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  next: { height: 15, width: 15, marginTop: 15 },
  thumb: { width: 26, height: 26, borderRadius: 26 / 2, marginTop: 8 },
  dex: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  uni: { fontSize: 14, color: colors.secondary },
  alum: {
    fontSize: 18,
  },
  wrapperDesc: {
    flex: 1,
    height: 60,
    paddingHorizontal: 20,
  },
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
  avatar: { height: 110, width: 110, borderRadius: 110 / 2 },
  avatarWrapper: {
    flexDirection: "row",
    marginTop: 10,
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
