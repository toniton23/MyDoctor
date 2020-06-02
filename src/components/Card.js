import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Card = ({ image, title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={image} style={styles.gambar} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "black",
    marginTop: 20,
    fontWeight: "bold",
    maxWidth: 60,
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: "tomato",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  gambar: { height: 70, width: 70 },
  container: { alignItems: "center" },
});
