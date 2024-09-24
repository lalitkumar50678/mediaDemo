import React, { useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import VideoPlayer from "react-native-video-controls";
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
  const [isImageLoading, setImageLoading] = useState(false);

  const onImageLoadStart = () => {
    setImageLoading(true);
  };

  const onImageLoadingStop = () => {
    setImageLoading(false);
  };

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          backgroundColor: "yellow",
        }}
      > */}
      {item.type === "image" ? (
        <>
          {isImageLoading && <ActivityIndicator size={"small"} />}
          <Image
            source={{ uri: item.url }}
            resizeMode="contain"
            style={styles.imageStyle}
            onLoadStart={onImageLoadStart}
            onLoadEnd={onImageLoadingStop}
          />
        </>
      ) : (
        <VideoPlayer
          source={{ uri: item.url }}
          style={styles.videoStyle}
          disableFullscreen
          disableVolume
          disableBack
          muted
        />
      )}
      {/* </View> */}
    </View>
  );
};
export default CustomViewer;
