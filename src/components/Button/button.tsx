import { TouchableOpacityProps, Text } from "react-native";
import { ButtonStyle, ButtonStyledProps } from "./styles";
import { ReactNode } from "react";

type ButtonProps = {
  title?: string;
  icon?: ReactNode;
} & ButtonStyledProps &
  TouchableOpacityProps;

export function Button({ title, variant, icon, outline, ...rest }: ButtonProps) {
  const text = {
    shape: "#000",
    blue500: "#fff",
    black: "#fff",
    text: "#000",
    border: "#000",
    blue200: "#fff",
    debug: "#000",
  };

  return (
    <ButtonStyle variant={variant} {...rest} outline={outline}>
      {icon}
      <Text style={{ color: outline ? '#1C1C1C' : text[variant], fontWeight: "bold" }}>{title}</Text>
    </ButtonStyle>
  );
}
