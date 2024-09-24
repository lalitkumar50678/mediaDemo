import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: Dimensions.get("window").height - 100,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
  videoStyle: {
    width: "100%",
    height: 300,
  },
});

export default styles;
