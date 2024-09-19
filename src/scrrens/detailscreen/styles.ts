import { StyleSheet } from "react-native";
import { BLACK_COLOR } from "../../utility/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK_COLOR,
  },
  topBarStyle: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default styles;
