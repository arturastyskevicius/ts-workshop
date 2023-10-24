import axios, { AxiosResponse } from "axios";
import { User } from "../types/types";

export const getUsers = (): Promise<AxiosResponse<{ data: User[] }>> =>
  axios.get("https://reqres.in/api/users");
