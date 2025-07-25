import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/queryClient";
import AuthProvider from "../hooks/useAuth";
import { RouterProvider } from "react-router";
import { router } from "../libs/router";

export default function Providers({ children }) {
  return (
    <RouterProvider router={router}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </RouterProvider>
  );
}
