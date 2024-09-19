/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar, useColorScheme, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import RootRoute from "./src/route/Route";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <RootRoute />
    </View>
  );
}

export default App;
