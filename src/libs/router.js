import { createBrowserRouter } from "react-router";

import HomePage from "../pages/home/page";
import RootLayout from "../pages/layout";
import AuthLayout from "../pages/auth/layout";
import LoginPage from "../pages/auth/login/page";
import NotFound from "../pages/not-found/page";
import ProtectedPageLayout from "../pages/protectedPages/layout";
import QuestionPage from "../pages/protectedPages/question/page";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: HomePage },

        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: LoginPage
            }
        ]
    },
    {
        path: "/",
        Component: ProtectedPageLayout,
        children: [
            {
                path: "question",
                Component: QuestionPage
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])