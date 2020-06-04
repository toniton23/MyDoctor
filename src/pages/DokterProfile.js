import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { Header, Button, Gap, BackButton } from "../components";
import { Toni } from "../asset/img";
import { colors } from "../utils/colors";

const UploadPhoto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.profile}>Doctor's Profile</Text>
        <Gap width={25} />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.body}>
        <View style={styles.avatarWrapper}>
          <Image source={Toni} style={styles.avatar} />
        </View>
        <Gap height={16} />
        <Text style={styles.name}>Ali Ridwan</Text>
        <Gap height={4} />
        <Text style={styles.job}>Dokter Gigi</Text>
        <Gap height={26} />
        <View style={styles.wrapperDesc}>
          <Text style={styles.alum}>Alumnus</Text>
          <Text style={styles.uni}>Universitas Trisaki, 2002</Text>
        </View>
        <Gap height={15} />
        <View style={styles.wrapperDesc}>
          <Text style={styles.alum}>Tempat Praktek</Text>
          <Text style={styles.uni}>Rumah Salit Harapan Jaya</Text>
        </View>
        <Gap height={15} />
        <View style={styles.wrapperDesc}>
          <Text style={styles.alum}>No. STR</Text>
          <Text style={styles.uni}>852963741123654</Text>
        </View>
        <Gap height={30} />
        <View style={styles.wrapperButton}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate("Chating")}
          />
        </View>
      </Animatable.View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  profile: { fontSize: 20, color: "white" },
  uni: { fontSize: 14, fontWeight: "800" },
  alum: {
    fontSize: 14,
    color: colors.secondary,
  },
  wrapperDesc: {
    height: 60,
    width: "100%",
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
    height: "85%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  header: {
    height: "15%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
