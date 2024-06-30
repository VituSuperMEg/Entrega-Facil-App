import styled from "styled-components/native";
import theme from "../../theme/theme";

export type InputStylesProps = {
  size? : number;
}
export const InputStyles = styled.View<InputStylesProps>`
  border : 1px solid ${theme.COLORS.border};
  width: ${props => props.size ? props.size + 'px' : '100%' };
  height: 50px;
  padding: 10px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`;