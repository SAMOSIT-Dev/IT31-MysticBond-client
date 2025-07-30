import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/queryClient";
import AuthProvider from "../hooks/useAuth";
import { RouterProvider, ScrollRestoration } from "react-router";
import { router } from "../libs/router";
import { Toaster } from "sonner";
import ScrollToTop from "./ScrollToTop";

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router}>
          {children}
          </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
