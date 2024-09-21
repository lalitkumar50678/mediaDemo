/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "react-native/Libraries/NewAppScreen";
import RootRoute from "./src/route/Route";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <RootRoute />
    </SafeAreaView>
  );
}

export default App;
