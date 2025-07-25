import { createContext, use, useCallback, useState } from "react";
import { request } from "../libs/request";
import { endpoint } from "../libs/utils/endpoints";

const AuthContext = createContext({
  isAuthenticated: false,
  pending: true,
  user: null,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context
};

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
          expires: 7,
          sameSite: "Lax",
        });

        setUser(userData);
        setIsAuthenticated(true);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Login failed", error);
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

  useEffect(() => {
    const cookieUser = Cookies.get("auth");
    if (cookieUser) {
      try {
        const parsedUser = JSON.parse(cookieUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch {
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
