import { useEffect, useState } from "react";
import { getToken } from "@/utils/auth";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const token = await getToken();
        setIsAuthenticated(!!token);
      } catch (e) {
        console.error(`An error occurred at the auth hook: ${e}`);
      } finally {
        setIsLoading(false);
      };
    };

    checkAuthorization();
  }, []);

  return { isLoading, isAuthenticated };
};

export { useAuth };
