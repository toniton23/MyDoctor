import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Star } from "../asset";
import { colors } from "../utils/colors";

const RatedDoctor = ({ image, name, job }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
      </View>
      <View style={styles.wrapperStar}>
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
        <Image source={Star} style={styles.star} />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  job: { fontWeight: "200", fontSize: 12, color: colors.secondary },
  name: { fontSize: 16, fontWeight: "800" },
  star: { height: 15, width: 15 },
  wrapperStar: {
    flexDirection: "row",
    marginTop: 15,
  },
  text: { flex: 1 },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 12,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
