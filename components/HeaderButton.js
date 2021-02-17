import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={"#fff"}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
