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

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DetailScreen"
>;

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation }) => {
  const { selectedIndex, mediaList } = useRoute().params;
  const onBackButtonClick = () => {
    navigation.goBack();
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
        <TouchableOpacity>
          <Image source={images.downloadIcon} style={styles.dowlonadIcon} />
        </TouchableOpacity>
      </View>

      <GallerySwiper
        images={mediaList}
        initialPage={selectedIndex}
        // scrollViewStyle={{ flex: 1, backgroundColor: "black" }}
        //style={{ flex: 1, backgroundColor: "black" }}
        initialNumToRender={mediaList.length < 7 ? 7 : mediaList.length}
        maxOverScrollDistance={0}
        //removeClippedSubviews={false}
        //sensitiveScroll={false}
        imageComponent={(imageProps, imageDimensions, index) => (
          <CustomViewer item={mediaList[index]} />
        )}
      />
      {/* <View style={{ backgroundColor: "gray", height: 50, width: 100 }} /> */}
    </SafeAreaView>
  );
};
export default DetailScreen;
