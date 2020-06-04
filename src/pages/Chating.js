import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeProfile from "../components/HomeProfile";

import { colors } from "../utils/colors";

import { ScrollView } from "react-native-gesture-handler";
import { BackButton, Gap, ChatItem, ChatInput, IsMe } from "../components";
import { Toni } from "../asset";

const Doctor = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <BackButton onPress={() => navigation.goBack()} />
          <Gap width={20} />
          <HomeProfile
            pict={Toni}
            name="Ali Ridwan"
            desc="Dokter Gigi"
            onPress={() => navigation.navigate("DokterProfile")}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.innerBody}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Text style={styles.chatDate}>Selasa, 2 Juni 2020</Text>
              <IsMe />
              <ChatItem other />
              <ChatItem isMe />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottom}>
        <ChatInput />
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center" },
  chatDate: {
    fontSize: 11,
    color: colors.secondary,
    marginVertical: 20,
    textAlign: "center",
  },
  content: { flex: 1 },
  innerBody: {
    height: "100%",
    width: "96%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: "2%",
    marginLeft: "2%",
  },
  bottom: {
    width: "100%",
    height: "10%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "white",
    width: "100%",
    height: "75%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  top: {
    backgroundColor: colors.default,
    width: "100%",
    height: "15%",
    paddingTop: 30,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
