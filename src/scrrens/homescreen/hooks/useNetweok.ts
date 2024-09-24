import { useEffect, useState } from "react";
import { getMediaData } from "../../../network/netwrok";
import { MediaData, MediaType } from "../../types";

const useNetwrok = (page: number) => {
  const [isLoading, setLoading] = useState(false);
  const [mediaArr, setMediaArr] = useState<Array<MediaType>>([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    fetchMedia();
  }, [page]);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response: MediaData = await getMediaData(page);
      console.log("response -> ", response);
      setTotalPage(response.totalPages);
      setMediaArr(
        mediaArr.length === 0
          ? response.media
          : [...mediaArr, ...response.media]
      );
    } catch (err) {
      console.log("Network calling ---> ", JSON.stringify(err));
    }
    setLoading(false);
  };
  return {
    isLoading,
    mediaArr,
    fetchMedia,
    totalPage,
  };
};
export default useNetwrok;
