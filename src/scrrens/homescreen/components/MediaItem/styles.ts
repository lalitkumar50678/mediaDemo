import { StyleSheet } from "react-native";
import { GRAY_COLOR } from "../../../../utility/colors";

const styles = StyleSheet.create({
  imageSty: {
    height: 400,
    width: "100%",
    minHeight: 300,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: GRAY_COLOR,
  },
  videoSty: {
    height: 400,
    width: "100%",
  },
  itemAlign: {
    alignItems: "center",
  },
});

export default styles;
