import styled from "styled-components/native";
import theme from "../../theme/theme";

export type ButtonStyledProps = {
  variant: keyof typeof theme.COLORS;
  size: 'sm' | 'md' | 'lg';
  outline? : boolean
};
export const ButtonStyle = styled.TouchableOpacity<ButtonStyledProps>`
  background: ${(props) => props.outline ? theme.COLORS.shape : theme.COLORS[props.variant]};
  border: ${(props) => props.outline ? `1px solid ${theme.COLORS[props.variant]}` : '0'};
  width: ${({ size}) => size === 'sm' ? '50px' : size === 'md' ? '100px' : '100%'};
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 8px;
`;
