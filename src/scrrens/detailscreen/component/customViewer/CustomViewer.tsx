import React from "react";
import { Image, Text, View } from "react-native";
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { MediaType } from "../../../types";
import styles from "./styles";

export interface CustomViewerType {
  item: MediaType;
}
const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};
const CustomViewer: React.FC<CustomViewerType> = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          backgroundColor: "yellow",
        }}
      > */}
      {item.type === "image" ? (
        <Image
          source={{ uri: item.url }}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      ) : (
        <VideoPlayer
          source={{ uri: item.url }}
          style={styles.videoStyle}
          disableFullscreen
          disableVolume
          disableBack
        />
      )}
      {/* </View> */}
    </View>
  );
};
export default CustomViewer;
