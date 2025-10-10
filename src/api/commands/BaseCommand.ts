import axiosInstance from "../axiosInstance";

export abstract class BaseCommand<T> {
  abstract execute(...args: any[]): Promise<T>;

  protected get client() {
    return axiosInstance;
  }
}
