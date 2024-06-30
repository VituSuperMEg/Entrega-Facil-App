import { useAuth } from "src/store/auth";
import { UserStyled } from "./styles";
import User from "@assets/icon/User.svg";

export const UserPhoto = () => {
  const user = useAuth((state) => state.user);

  return (
    <>
      {user?.photo ? (
        <UserStyled>
          <User />
        </UserStyled>
      ) : (
        <UserStyled>
          <User />
        </UserStyled>
      )}
    </>
  );
};
