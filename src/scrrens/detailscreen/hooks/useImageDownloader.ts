import React from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import RNFS from "react-native-fs";
import {
  Ok_button,
  Storage_permission_required_title,
  Storage_persmission_required_description,
} from "../../../localization/localization";
import axios from "axios";
import { APIBaseService } from "../../../network/axiosBase";
import { getMediaDowlnoad } from "../../../network/netwrok";

const useImageDownloader = () => {
  const requestStoragePermission = async () => {
    // if (Platform.OS === "android") {
    //   try {
    //     const granted = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //       {
    //         title: Storage_permission_required_title,
    //         message: Storage_persmission_required_description,
    //         buttonPositive: Ok_button,
    //       }
    //     );
    //     return granted === PermissionsAndroid.RESULTS.GRANTED;
    //   } catch (err) {
    //     console.warn(err);
    //     return false;
    //   }
    // }
    return true; // iOS doesn't need permission
  };

  const urlToFileName = (uri: string): string => {
    const parts = uri.split("/");
    return parts[parts.length - 1];
  };

  const downloadImage = async (url: string) => {
    const hasPermission = true; // await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert(
        "Permission Denied",
        "Storage permission is required to save the image."
      );
      return;
    }
    const fileName = urlToFileName(url);
    const destinationPath = `${RNFS.LibraryDirectoryPath}/${fileName}`;
    try {
      console.log("destinationPath ---> ", destinationPath);
      const response = await getMediaDowlnoad(url);
      console.log("response dwonload -> ", response.data);
      await RNFS.writeFile(destinationPath, response.data, "base64");
      Alert.alert("Success", "Image downloaded successfully to your gallery!");
    } catch (error) {
      console.error("Error downloading the image:", error);
      Alert.alert("Error", "Failed to download the image");
    }
  };
  return downloadImage;
};
export default useImageDownloader;
