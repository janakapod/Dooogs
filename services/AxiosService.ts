import axios, { AxiosRequestConfig } from "axios";

export class AxiosService {
  private axiosConfig: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig) {
    this.axiosConfig = config;
  }

  /**
   * Get data from the specified URL.
   *
   * @param {string} url - The URL to send the GET request to
   * @return {Promise<T>} A promise that resolves with the data from the GET request
   */
  get<T = unknown>(url: string) {
    return axios.get<T>(url, this.axiosConfig);
  }
}
