import React from "react";
import { Image, View } from "react-native";
import Video from "react-native-video";
import { MediaType } from "../../../types";
import styles from "./styles";

export interface CustomViewerType {
  item: MediaType;
}
const CustomViewer: React.FC<CustomViewerType> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "yellow",
          //paddingVertical: 20,
          //height: 50,
          // width: 100,
          //marginBottom: 100,
        }}
      >
        {item.type === "image" ? (
          <Image
            source={{ uri: item.url }}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        ) : (
          <Video source={{ uri: item.url }} style={styles.videoStyle} />
        )}
      </View>
    </View>
  );
};
export default CustomViewer;
