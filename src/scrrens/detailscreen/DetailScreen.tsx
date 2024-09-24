import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ViewToken,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  StatusBar,
  AccessibilityInfo,
} from "react-native";
import GallerySwiper from "react-native-gallery-swiper";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../route/types";
import images from "../../utility/images";
import CustomViewer from "./component/customViewer/CustomViewer";
import useImageDownloader from "./hooks/useImageDownloader";
import { MediaType } from "../types";

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DetailScreen"
>;

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation }) => {
  const { selectedIndex, mediaList } = useRoute().params;
  const onBackButtonClick = () => {
    navigation.goBack();
  };

  const downloadImage = useImageDownloader();

  const onClickDowlnoad = () => {
    downloadImage(mediaList[selectedIndex].url);
  };

  console.log("selectedIndex -> ", selectedIndex);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarStyle}>
        <TouchableOpacity onPress={onBackButtonClick}>
          <Image
            source={images.arrowIcon}
            resizeMode="contain"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickDowlnoad}>
          <Image source={images.downloadIcon} style={styles.dowlonadIcon} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <GallerySwiper
          images={mediaList}
          initialPage={selectedIndex}
          initialNumToRender={mediaList.length < 7 ? 7 : mediaList.length}
          scrollViewStyle={{ height: 500 }}
          imageComponent={(imageProps, imageDimensions, index) => (
            <CustomViewer item={mediaList[index]} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default DetailScreen;
