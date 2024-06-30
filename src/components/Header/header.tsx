import { Text } from "@theme/components";
import {
  HeaderStyled,
  NotificationAndUserStyled,
  NotificationStyled,
} from "./styles";

import Bell from "@assets/icon/Bell.svg";
import { UserPhoto } from "./user";
import { Location } from "./location";

export const Header = ({}) => {
  return (
    <HeaderStyled>
      <Location />
      <NotificationAndUserStyled>
        <NotificationStyled>
          <Bell />
        </NotificationStyled>
        <UserPhoto />
      </NotificationAndUserStyled>
    </HeaderStyled>
  );
};
