import { StyleSheet } from "react-native";
import { GRAY_COLOR } from "../../../../utility/colors";

const styles = StyleSheet.create({
  imageSty: {
    height: 400,
    width: "100%",
    minHeight: 300,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: GRAY_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  videoSty: {
    height: 400,
    width: "100%",
  },
  itemAlign: {
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
