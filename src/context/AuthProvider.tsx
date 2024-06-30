import { useNavigation } from "@react-navigation/native";
import { ReactNode, useEffect } from "react";
import { View } from "react-native";
import { useAuth } from "src/store/auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const { navigate } = useNavigation();
  const token = useAuth((state) => state.token);

  useEffect(() => {
    if (token) {
      navigate("Tabs");
    } else {
      navigate("Login")
    }
  }, [token, navigate]);

  return <>{children}</>;
}
