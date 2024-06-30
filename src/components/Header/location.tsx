import { Text } from "@theme/components";
import { LocationItemStyled, LocationStyled } from "./styles";
import MapPoint from "@assets/icon/Map Point.svg";
import AltArrowDown from '@assets/icon/Alt Arrow Down.svg';

export const Location = () => {
  return (
    <LocationStyled>
      <LocationItemStyled>
        <MapPoint />
        <Text color="shape" size={16}>
          Brasil, Br
        </Text>
        <AltArrowDown />
      </LocationItemStyled>
    </LocationStyled>
  );
};
