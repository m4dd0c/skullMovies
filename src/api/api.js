import { instance } from "../constants/constant";

export const useFetch = async (endpoint) => {
  try {
    const { data } = await instance.get(endpoint);
    return data;
  } catch (e) {
    return e;
  }
};
