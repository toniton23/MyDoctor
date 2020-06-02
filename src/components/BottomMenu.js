import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const BottomMenu = ({ title, onPress, image }) => {
  return (
    <View>
      <TouchableOpacity style={styles.press} onPress={onPress}>
        <View style={styles.wrapperMenu}>
          <View style={styles.menu}>
            <Image source={image} style={{ height: 35, width: 35 }} />
          </View>
        </View>
        <Text style={{ color: "white" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "tomato",
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperMenu: {
    backgroundColor: "white",
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -35,
  },
  press: { alignItems: "center" },
});
