import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppProvider } from "./src/Context";
import MainStack from "./src/Routes/MainStack";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </AppProvider>
  );
}
