import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import MealsNavigator from "../navigation/MealsNavigator";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealId = props.navigation.state.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{selectedMeal.duration}</Text>
        <Text>{selectedMeal.affordability}</Text>
        <Text>{selectedMeal.complexity}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => {
        return <ListItem>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => {
        return <ListItem>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favourite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mealRow: {
    backgroundColor: "white",
    padding: 15
  },
  mealDetail: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 15
  }
});

export default MealDetailScreen;
