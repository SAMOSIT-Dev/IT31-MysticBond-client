import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSession } from "../../hooks/useAuth";
import { request } from "../request";
import { endpoint } from "../utils/endpoints";

export const Hint = {
    getHints: (initialData) => {
        const token = getSession()
        return useQuery({
            queryKey: ["userHint", token.ACCESS_TOKEN],
            queryFn: () => request.get(endpoint.api.getHints, {
                headers: {
                    Authorization: `Bearer ${token.ACCESS_TOKEN}`
                }
            }),
            initialData,
            placeholderData: keepPreviousData,
            enabled: !!token.ACCESS_TOKEN
        })
    }
}