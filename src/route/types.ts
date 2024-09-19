import { MediaType } from "../scrrens/types";

export type RootStackParamList = {
  Dashboard: undefined; // No parameters expected
  DetailScreen: { selectedIndex: number; mediaList: Array<MediaType> }; // itemId is expected as a parameter
};
