import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import MealsNavigator from "../navigation/MealsNavigator";

const MealItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelectMeal} style={styles.mealContainer}>
      <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
          <Text style={styles.headerText}>{props.title}</Text>
        </ImageBackground>
      </View>
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{props.duration}</Text>
        <Text>{props.affordability}</Text>
        <Text>{props.complexity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    height: 200,
    width: "100%",
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealRow: {
    backgroundColor: "white"
  },
  mealDetail: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  mealHeader: {
    height: "80%",
    color: "white"
  },
  headerText: {
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white"
  }
});

export default MealItem;
