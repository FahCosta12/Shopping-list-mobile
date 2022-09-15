import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainTabs from "./MainTabs";
import Preload from "../screens/Preload";

const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>

      <OperationModal />
    </>
  );
};
