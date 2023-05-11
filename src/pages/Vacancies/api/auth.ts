import { AuthResponseType } from "../types";
import { authQueryInstance } from "../../App/api/const";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { standardCacheTimeReactQueryMs } from "../const";

const login = import.meta.env.VITE_LOGIN;
const password = import.meta.env.VITE_PASSWORD;
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientPassword = import.meta.env.VITE_CLIENT_SECRET;

export const authGetData = () => {
  const {
    data: authData,
    isLoading,
    isError,
    error
  } = useQuery(
    ["authData"],
    () => {
      const response =
        authQueryInstance.get(`/oauth2/password/?login=${login}&password=${password}
      &client_id=${clientId}&client_secret=${clientPassword}`);
      return response;
    },
    {
      staleTime: standardCacheTimeReactQueryMs,
      retry: false,
      select: (response) => response.data as AuthResponseType
    }
  );
  return { authData, isLoading, isError, error: error as AxiosError };
};