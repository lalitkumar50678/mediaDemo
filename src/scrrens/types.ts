export type MediaType = {
  id: string;
  type: string;
  url: string;
};

export type MediaData = {
  media: Array<MediaType>;
  currentPage: number;
  totalPages: number;
};
