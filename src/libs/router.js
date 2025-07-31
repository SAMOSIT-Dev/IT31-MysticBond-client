import { createBrowserRouter } from "react-router";

import RootLayout from "../pages/layout";
import AuthLayout from "../pages/auth/layout";
import LoginPage from "../pages/auth/login/page";
import NotFound from "../pages/not-found/page";
import ProtectedPageLayout from "../pages/protectedPages/layout";
import QuestionPage from "../pages/protectedPages/question/page";
import { endpoint } from "./utils/endpoints";
import ErrorPage from "../pages/error/page";
import { initialDataLoader } from "./preload";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        ErrorBoundary: ErrorPage,
        // HydrateFallback: null,
        children: [
            {
                index: true, lazy: {
                    // shouldRevalidate: true,
                    Component: async () => (await import("../pages/home/page")).default
                }
            },
        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: LoginPage,
            }
        ]
    },
    {
        path: "/",
        Component: ProtectedPageLayout,
        ErrorBoundary: ErrorPage,
        HydrateFallback: null,
        children: [
            {
                path: "question",
                Component: QuestionPage,
                loader: () => initialDataLoader(endpoint.api.userProfile)
            },
            {
                path: "hint",
                lazy: {
                    Component: async () => (await import("../pages/protectedPages/hint/page")).default,
                },
                loader: () => initialDataLoader(endpoint.api.getHints)
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])