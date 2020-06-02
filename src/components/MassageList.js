import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const MassageList = ({ image, name, chat, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{chat}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MassageList;

const styles = StyleSheet.create({
  text: { fontSize: 12, color: colors.secondary, maxWidth: 250 },
  name: { fontSize: 16, fontWeight: "500" },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
    marginLeft: 10,
  },
  container: { flexDirection: "row", marginBottom: 20, alignItems: "center" },
});
