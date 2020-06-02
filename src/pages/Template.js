import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "../utils/colors";

const Massages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.header}>Massages</Text>
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerBody}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Massages;

const styles = StyleSheet.create({
  innerBody: {
    backgroundColor: "yellow",
    height: "100%",
    width: "96%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginRight: "2%",
    marginLeft: "2%",
  },
  body: {
    width: "100%",
    height: "85%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 40,
    color: "white",
  },
  top: { width: "100%", height: "15%", backgroundColor: colors.default },
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },
});
