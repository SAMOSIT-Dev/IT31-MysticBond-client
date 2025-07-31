import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { request } from "../request";
import { endpoint } from "../utils/endpoints";
import { queryClient } from "../queryClient";
import { getSession } from "../../hooks/useAuth";

export const Profile = {
    getProfile: (initialData) => {
        const token = getSession()
        return useQuery({
            queryKey: ["profile", token],
            queryFn: () =>
                request.get(endpoint.api.userProfile),
            placeholderData: keepPreviousData,
            initialData,
            enabled: !!token,
        })
    },
    updateProfile: () => {
        const token = getSession()
        return useMutation({
            mutationFn: (params) =>
                request.put(endpoint.api.userProfile, params),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["profile"] })
            },
            onError: (error) => {
                console.error("Update failed:", error)
            }
        })
    }
}