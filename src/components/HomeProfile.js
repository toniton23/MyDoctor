import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeProfile = ({ pict, name, desc, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={pict} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{desc}</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  job: { fontWeight: "400", fontSize: 12, color: "white" },
  name: { fontSize: 16, color: "white", fontWeight: "800" },
  text: { marginLeft: 20 },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 56 / 2,
  },
});
