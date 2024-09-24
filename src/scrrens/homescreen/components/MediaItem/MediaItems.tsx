import React, { useState, useRef } from "react";
import { View, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { MediaType } from "../../../types";
import styles from "./styles";

export interface MediaItemType {
  item: MediaType;
  index: number;
  onPress: (item: number) => void;
}
const MediaItem: React.FC<MediaItemType> = ({ item, index, onPress }) => {
  const [isImageLoading, setImageLoading] = useState(false);
  const videoRef = useRef<VideoRef | null>(null);
  const onImageLoadStart = () => {
    setImageLoading(true);
  };

  const onImageLoadingStop = () => {
    setImageLoading(false);
  };

  return (
    <TouchableOpacity
      style={styles.itemAlign}
      key={item.id}
      onPress={() => onPress(index)}
    >
      {item.type === "image" ? (
        <View style={styles.imageSty}>
          {isImageLoading && <ActivityIndicator size={"small"} />}
          <Image
            onLoadStart={onImageLoadStart}
            onLoadEnd={onImageLoadingStop}
            style={styles.imageSty}
            source={{ uri: item.url }}
            resizeMode="cover"
          />
        </View>
      ) : (
        <Video
          source={{
            uri: item.url,
          }}
          ref={videoRef}
          style={styles.videoSty}
          muted
        />
      )}
    </TouchableOpacity>
  );
};

export default MediaItem;
