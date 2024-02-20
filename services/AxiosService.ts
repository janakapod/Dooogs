import axios, { AxiosRequestConfig } from "axios";

export class AxiosService {
  private axiosConfig: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig) {
    this.axiosConfig = config;
  }

  get<T = unknown>(url: string) {
    return axios.get<T>(url, this.axiosConfig);
  }
}
