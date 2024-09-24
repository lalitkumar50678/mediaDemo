import axios, { AxiosInstance } from "axios";

import { BASE_URL, TIMEOUT_MESSAGE, TIMEOUT_MS } from "./constants";

export class APIBaseService {
  private static readonly className = "APIBaseService";
  private static axiosInstances: Record<string, AxiosInstance>;

  private static init(url: string): AxiosInstance {
    console.log("creating instance ", url);
    APIBaseService.axiosInstances = {
      ...APIBaseService.axiosInstances,
      [url]: axios.create({
        baseURL: url,
        timeout: TIMEOUT_MS,
        timeoutErrorMessage: TIMEOUT_MESSAGE,
      }),
    };

    return APIBaseService.axiosInstances[url];
  }

  public static getInstanceByURL(url?: string): AxiosInstance {
    let baseUrl = "";
    if (url) {
      baseUrl = url;
    } else {
      baseUrl = BASE_URL;
    }

    if (APIBaseService.axiosInstances?.[baseUrl]) {
      return APIBaseService.axiosInstances[baseUrl];
    } else {
      return APIBaseService.init(baseUrl);
    }
  }

  public static deleteInstanceByURL(url: string): void {
    delete APIBaseService.axiosInstances[url];
  }
}
