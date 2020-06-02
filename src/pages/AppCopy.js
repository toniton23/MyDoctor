import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomMenu } from "../components";
import { User, Social, Chat, Plus } from "../asset";
import { colors } from "../utils/colors";
import Header from "../components/Header";

const MainApp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Header
          title="Mau konsultasi dengan siapa?"
          onPress={() => navigation.navigate("GetStarted")}
        />
      </View>
      <View style={styles.body}></View>
      <View style={styles.bottom}>
        <BottomMenu
          title="Doctor"
          image={Social}
          onPress={() => navigation.navigate("Doctor")}
        />
        <BottomMenu
          title="Massages"
          image={Chat}
          onPress={() => navigation.navigate("Massages")}
        />
        <BottomMenu
          title="Hospital"
          image={Plus}
          onPress={() => navigation.navigate("Hospital")}
        />
      </View>
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  top: {
    height: "23%",
    width: "100%",
    backgroundColor: colors.default,
    flexDirection: "row",
    borderBottomLeftRadius: 25,
  },
  body: {
    height: "70%",
    width: "100%",
    backgroundColor: "green",
  },
  bottom: {
    backgroundColor: colors.default,
    height: "7%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  container: {
    backgroundColor: colors.default,
    height: "100%",
    width: "100%",
  },
});
