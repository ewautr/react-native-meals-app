import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealsNavigator from "../navigation/MealsNavigator";

const CategoryGridItem = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }
});

export default CategoryGridItem;
