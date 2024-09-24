import React from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import {
  Ok_button,
  Storage_permission_required_title,
  Storage_persmission_required_description,
} from "../../../localization/localization";

const useImageDownloader = () => {
  const requestStoragePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: Storage_permission_required_title,
            message: Storage_persmission_required_description,
            buttonPositive: Ok_button,
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const getExtention = (filename: string) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  const downloadImage = async (url: string) => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert(
        "Permission Denied",
        "Storage permission is required to save the image.",
        [
          {
            text: "Ok",
          },
        ]
      );
      return;
    }
    let date = new Date();
    let image_URL = url;
    let ext = "." + getExtention(image_URL)[0];
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          "/image_" +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: "Image",
      },
    };
    config(options)
      .fetch("GET", image_URL)
      .then((res) => {
        Alert.alert("", "Image Downloaded Successfully.");
      });
  };
  return downloadImage;
};
export default useImageDownloader;
