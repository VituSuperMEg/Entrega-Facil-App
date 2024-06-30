import theme from "@theme/theme";
import styled from "styled-components/native";

export const HeaderStyled = styled.View`
  padding: 40px 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const NotificationAndUserStyled = styled.View`
  flex-direction: row;
  gap: 10px;
`;
export const NotificationStyled = styled.TouchableOpacity`
  background: ${theme.COLORS.blue200};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
export const UserStyled = styled.TouchableOpacity`
  background: ${theme.COLORS.blue200};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
export const LocationStyled = styled.TouchableOpacity`
  background: ${theme.COLORS.blue200};
  width: 200px;
  height: 40px;
  border-radius: 50px;
  
`;
export const LocationItemStyled = styled.View`
  padding-top: 8px;
  padding-left: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
`;
