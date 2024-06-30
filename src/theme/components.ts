import styled from 'styled-components/native';
import theme from './theme';

type TextProps = {
    size : number;
    color : keyof typeof theme.COLORS;
    align?: 'center' | 'justify' | 'left' | 'right';
    weight? : number;
}
type Direction = {
  direction : 'column' | 'row',
}
type Align = {
  algin?: 'center' | 'flex-start' | 'flex-end';
}
export const ScreenStyle = styled.View`
  padding: 20px;
  background: ${theme.COLORS.shape};
  flex : 1;
`;
export const Center = styled.View`
  align-items: center;
  justify-content: center;
  flex : 1;
`;
export const Between = styled.View<Direction & Align>`
  justify-content: space-between;
  flex-direction: ${({ direction}) => direction};
  align-items: ${({ algin }) => algin};
  flex : 1;
`;
export const End = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const Text = styled.Text<TextProps>`
   color : ${props => theme.COLORS[props.color]};
   font-size: ${props => props.size + "px"};
   text-align: ${({ align }) => align ? align : 'left'};
   font-weight: ${props => +props.weight};
`;