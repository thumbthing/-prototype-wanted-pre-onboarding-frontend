import axios, { AxiosInstance, AxiosResponse } from "axios";

class Api {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      // baseURL: "https://www.pre-onboarding-selection-task.shop",
      baseURL: "http://localhost:8000",
      headers: {
        "Content-Type": 'application/json',
      },
      transformResponse: response => {
        try {
          return JSON.parse(response);
        } catch (e) {
          return response
        }
      },
      responseType: 'json',
    });
  }

  get<ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> {
    return (
      console.log("get start"),
      this.instance.get(url));
  }

  post<ParamType, ResponseType>(
    url: string,
    param?: ParamType
    ): Promise<AxiosResponse<ResponseType>> {
    return (
      console.log("post start"),
      this.instance.post(url, param));
  }
}

export const request = new Api();