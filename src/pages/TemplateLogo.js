import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "../utils/colors";
import { Header } from "../components";

const TemplateLogo = () => {
  return (
    <View>
      <View style={styles.top}>
        <Header
          title="Upload Photo"
          onPress={() => navigation.navigate("GetStarted")}
        />
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerBody}></View>
        </ScrollView>
      </View>
      <Text></Text>
    </View>
  );
};

export default TemplateLogo;

const styles = StyleSheet.create({
  innerBody: {
    height: "100%",
    width: "96%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: "2%",
    marginLeft: "2%",
  },
  body: {
    width: "100%",
    height: "75%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingTop: 20,
  },
  top: { width: "100%", height: "25%" },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
