import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name="arrow-left" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({});
