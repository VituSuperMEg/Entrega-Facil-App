import { saveData, retrieveData } from "@services/storage";
import { create,  } from "zustand";

interface User {
  nome: string;
  email: string;
  photo: string;
}
interface UserState {
  user: User | null;
  token: string;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
}
export const useAuth = create<UserState>((set) => {
  return {
    user: null,
    token: "",
    setUser: async (user: User) => {
      set({ user });
      if (user) {
        await saveData("user", JSON.stringify(user));
      } else {
        await saveData("user", "");
      }
    },
    setToken: async (token: string) => {
      set({ token });
      await saveData("token", token);
    },
    logout: async () => {
      await saveData("user", "");
      await saveData("token", "");
      set({ user: null, token: "" });
    },
  };
});
