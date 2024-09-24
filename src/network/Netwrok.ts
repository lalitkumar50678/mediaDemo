import axios from "axios";
import { MediaData } from "../scrrens/types";
import { BASE_URL, GET_MEDIA } from "./constants";
import { APIBaseService } from "./axiosBase";
import { ENDPOINTS } from "./api-endpoints.constants";

export const getMediaData = async (page: number): Promise<MediaData> => {
  return await APIBaseService.getInstanceByURL()
    .get(`${ENDPOINTS.GET_MEDIA}?page=${page}`)
    .then((res) => res.data);
};

export const getMediaDowlnoad = async (url: string) => {
  return await APIBaseService.getInstanceByURL(url)
    .get("", {
      responseType: "blob",
    })
    .then((res) => res);
};

export const baseAxios = () => {
  axios.defaults.baseURL = BASE_URL;
  return;
};
