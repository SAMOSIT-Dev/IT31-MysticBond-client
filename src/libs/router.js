import { createBrowserRouter, redirect } from "react-router";

import HomePage from "../pages/home/page";
import RootLayout from "../pages/layout";
import AuthLayout from "../pages/auth/layout";
import LoginPage from "../pages/auth/login/page";
import NotFound from "../pages/not-found/page";
import ProtectedPageLayout from "../pages/protectedPages/layout";
import QuestionPage from "../pages/protectedPages/question/page";
import { request } from "./request";
import { getSession } from "../hooks/useAuth";
import { endpoint } from "./utils/endpoints";
import Cookies from "js-cookie";
import { toast } from "sonner";
import ErrorPage from "../pages/error/page";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: HomePage },
            {
                path: "auth",
                Component: AuthLayout,
                children: [
                    {
                        path: "login",
                        Component: LoginPage
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        Component: ProtectedPageLayout,
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: "question",
                Component: QuestionPage,
                loader: async () => {
                    const token = getSession()

                    if (!token) {
                        return redirect("/auth/login")
                    }

                    const data = await request.get(endpoint.api.userProfile, { headers: { Authorization: `Bearer ${token.ACCESS_TOKEN}` } })

                    if (data?.status && data.status !== 200) {
                        return redirect("/auth/login")
                    }

                    return { data }
                }
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])