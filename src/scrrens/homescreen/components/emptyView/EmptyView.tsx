import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./styles";
import { Loading_data } from "../../../../localization/localization";

const EmptyView = () => {
  return (
    <View style={styles.conitaner}>
      <ActivityIndicator size={"small"} />
      <Text>{Loading_data}</Text>
    </View>
  );
};
export default EmptyView;
