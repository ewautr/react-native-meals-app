import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import MealsNavigator from "../navigation/MealsNavigator";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

const CategoryMeal = props => {
  const catId = props.navigation.state.params.categoryId;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryId.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMeal.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({});

export default CategoryMeal;
