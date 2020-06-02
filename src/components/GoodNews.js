import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Gedung } from "../asset";
import { colors } from "../utils/colors";

const GoodNews = ({ header, title, image }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.today}>{title}</Text>
      </View>
      <Image source={image} style={styles.gambar} />
    </View>
  );
};

export default GoodNews;

const styles = StyleSheet.create({
  gambar: { width: 90, height: 70, borderRadius: 15, marginTop: 10 },
  today: { fontSize: 12, fontWeight: "200", color: colors.secondary },
  header: { fontSize: 15, fontWeight: "800", maxWidth: 200 },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
