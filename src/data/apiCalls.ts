import axios from "axios";
import { GetUsersResponse } from "../types/responses";

// MINE
// export const getUsers = (): Promise<AxiosResponse<{ data: User[] }>> =>
//   axios.get("https://reqres.in/api/users");

// VINTED
export const getUsers = () =>
  axios.get<GetUsersResponse>("https://reqres.in/api/users");
