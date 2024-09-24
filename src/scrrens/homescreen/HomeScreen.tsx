import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { MediaType } from "../types";
import styles from "./styles";
import MediaItem from "./components/MediaItem/MediaItems";
import ItemSeperator from "./components/ItemSaperator/ItemSaperator";
import EmptyView from "./components/emptyView/EmptyView";
import useNetwrok from "./hooks/useNetweok";
import { RootStackParamList } from "../../route/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Dashboard">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {}, []);

  const { isLoading, mediaArr, totalPage } = useNetwrok(page);

  const renderSaperator = () => <ItemSeperator />;

  const renderItem = ({ item, index }: { item: MediaType; index: number }) => (
    <MediaItem item={item} index={index} onPress={onClickItem} />
  );

  const onClickItem = (index: number) => {
    navigation.navigate("DetailScreen", {
      selectedIndex: index,
      mediaList: mediaArr,
    });
  };

  const onEndReached = () => {
    if (!isLoading && page <= totalPage) {
      setPage((pg) => ++pg);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mediaArr}
        contentContainerStyle={
          mediaArr.length == 0 ? styles.listcontainer : styles.listStyle
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderSaperator}
        ListEmptyComponent={() => <EmptyView />}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        ListFooterComponent={() =>
          isLoading && <ActivityIndicator size={"small"} />
        }
      />
    </View>
  );
};
export default HomeScreen;
