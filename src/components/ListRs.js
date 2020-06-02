import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../utils/colors";

const ListRs = ({ image, title, desc }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.gambar} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default ListRs;

const styles = StyleSheet.create({
  desc: { fontSize: 12, color: colors.secondary },
  title: { fontSize: 16, fontWeight: "500", maxWidth: 150 },
  gambar: {
    width: 80,
    height: 60,
    borderRadius: 15,
    marginRight: 15,
    marginLeft: 10,
  },
  container: { flexDirection: "row", alignItems: "center" },
});
