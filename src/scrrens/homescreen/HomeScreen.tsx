import React, { useState, useRef } from "react";
import { View, Text, FlatList, ViewToken } from "react-native";
import list from "../../data/media.json";
import { MediaType } from "../types";
import styles from "./styles";
import MediaItem, { MediaVideoRef } from "./components/MediaItem/MediaItems";
import ItemSeperator from "./components/ItemSaperator/ItemSaperator";
const viewabilityConfig = { viewAreaCoveragePercentThreshold: 70 };
const HomeScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const videoRefs = useRef<MediaVideoRef>(null);

  const renderSaperator = () => <ItemSeperator />;

  const renderItem = ({ item, index }: { item: MediaType; index: number }) => (
    <MediaItem
      ref={(ref) => (videoRefs[index] = ref)}
      index={index}
      item={item}
    />
  );

  const _onViewableItemsChanged = (props) => {
    const changed = props.changed;
    const viewableItems = props.viewableItems;

    changed.forEach((item, index) => {
      if (!item.isViewable && videoRefs.current) {
        console.log("changed calling -> ", changed);
        // videoRefs[index].current.pause();
      }
    });

    viewableItems.forEach((item, index) => {
      if (item.isViewable && videoRefs.current) {
        videoRefs[index].current.play();
      }
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list as Array<MediaType>}
        contentContainerStyle={styles.listcontainer}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSaperator}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={_onViewableItemsChanged}
      />
    </View>
  );
};
export default HomeScreen;
