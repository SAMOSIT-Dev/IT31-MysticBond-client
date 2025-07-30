export const endpoint = {
    baseUrl: import.meta.env.VITE_BASE_URL || "http://localhost:3000",
    api: {
        login: "/samosit/it31-mysticbond/auth/login",
        userProfile: "/samosit/it31-mysticbond/users",
        refreshToken: "/samosit/it31-mysticbond/auth/refresh",
        getHints: "/samosit/it31-mysticbond/hints"
    }
}