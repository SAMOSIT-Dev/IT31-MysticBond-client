import { createContext, use, useCallback, useEffect, useState } from "react";
import { request } from "../libs/request";
import { endpoint } from "../libs/utils/endpoints";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { Auth } from "../libs/api/auth.api";

const AuthContext = createContext({
  isAuthenticated: false,
  pending: true,
  user: null,
  login: async (studentId, password) => {},
  logout: () => {},
});

export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export function getSession() {
  try {
    return JSON.parse(Cookies.get("auth"));
  } catch (error) {
    // console.error(error)
    Cookies.remove("auth");
    return null;
  }
}

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pending, setPending] = useState(true);
  const [user, setUser] = useState(null);

  const login = useCallback(async (studentId, password) => {
    setPending(true);
    try {
      const response = await request.post(endpoint.api.login, {
        studentId,
        password,
      });

      if (response.status === 200 && response.data?.data) {
        const userData = response.data.data;

        Cookies.set("auth", JSON.stringify(userData), {
          expires: 1,
          sameSite: "Lax",
        });

        toast.success("Login Successfully");

        setUser(userData);
        setIsAuthenticated(true);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Authentication Failed", error.message);
      logout();
    } finally {
      setPending(false);
    }
  }, []);

  const logout = useCallback(() => {
    Cookies.remove("auth");
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const { data, error } = Auth.refresh();

  useEffect(() => {
    if (error) {
      const errorResponse = error?.response;
      if (errorResponse) {
        switch (errorResponse?.status) {
          case 401:
            logout();
            toast.error(errorResponse?.data?.message);
            window.location.assign("/auth/login");
            break;
          default:
            break;
        }
      }
    }
  }, [error]);

  useEffect(() => {
    const responseData = data?.data?.data;
    if (responseData && data.status === 200) {
      const hasTokens =
        responseData?.ACCESS_TOKEN && responseData?.REFRESH_TOKEN;

      if (hasTokens) {
        Cookies.set("auth", JSON.stringify(data.data.data), {
          expires: 1,
          sameSite: "Lax",
        });
      }
    }
  }, [data]);

  useEffect(() => {
    const cookieUser = Cookies.get("auth");
    if (cookieUser) {
      try {
        const parsedUser = JSON.parse(cookieUser)
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (e) {
        console.error(e);
        Cookies.remove("auth");
      }
    }
    setPending(false);
  }, []);

  const value = {
    isAuthenticated,
    pending,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
