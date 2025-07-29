import { useQuery } from "@tanstack/react-query";
import { request } from "../request";
import { endpoint } from "../utils/endpoints";
import { getSession } from "../../hooks/useAuth";

export const Auth = {
    refresh: () => useQuery({ queryKey: ["auth:refresh"], queryFn: () => request.post(endpoint.api.refreshToken, { refresh_token: getSession().REFRESH_TOKEN }), refetchInterval: 60 * 1000, refetchOnWindowFocus: true })
}