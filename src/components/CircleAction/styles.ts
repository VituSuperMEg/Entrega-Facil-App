import theme from "@theme/theme";
import styled from "styled-components/native";

export const CircleActionStyles = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border: 1px solid ${theme.COLORS.border};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;