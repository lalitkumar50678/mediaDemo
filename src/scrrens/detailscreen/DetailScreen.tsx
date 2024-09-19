import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ViewToken,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import GallerySwiper from "react-native-gallery-swiper";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../route/types";
import images from "../../utility/images";
import { useRoute } from "@react-navigation/native";

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DetailScreen"
>;

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation }) => {
  const { selectedIndex, mediaList } = useRoute().params;
  const onBackButtonClick = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBarStyle}>
        <TouchableOpacity onPress={onBackButtonClick}>
          <Image src={images.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image src={images.downloadIcon} />
        </TouchableOpacity>
      </View>
      <GallerySwiper
        images={mediaList}
        initialNumToRender={selectedIndex}
        // Version *1.15.0 update
        // onEndReached={() => {
        //     // add more images when scroll reaches end
        // }}
      />
    </View>
  );
};
export default DetailScreen;
