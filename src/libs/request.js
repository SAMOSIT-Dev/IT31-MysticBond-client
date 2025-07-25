import axios from "axios";
import { endpoint } from "./utils/endpoints";

export const request = axios.create({ baseURL: endpoint.baseUrl })