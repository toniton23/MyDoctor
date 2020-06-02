import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Send } from "../asset/img";
import { colors } from "../utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonIcon = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image source={Send} style={styles.image} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  image: { width: 25, height: 25, position: "absolute", bottom: 10, left: 8 },
  page: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    backgroundColor: colors.default,
  },
});
