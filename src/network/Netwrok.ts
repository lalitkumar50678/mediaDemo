import { MediaData } from "../scrrens/types";
import { GET_MEDIA } from "./constants";

export const getMediaData = async (page: number): Promise<MediaData> => {
  return await fetch(`${GET_MEDIA}?page=${page}`, {
    method: "get",
  })
    .then((res) => res.json())
    .catch((err) => err);
};
