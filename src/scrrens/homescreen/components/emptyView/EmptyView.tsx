import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./styles";
import { LOADING_DATA } from "../../../../localization/localization";

const EmptyView = () => {
  return (
    <View style={styles.conitaner}>
      <ActivityIndicator size={"small"} />
      <Text>{LOADING_DATA}</Text>
    </View>
  );
};
export default EmptyView;
