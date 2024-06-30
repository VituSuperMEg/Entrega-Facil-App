import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { End } from "../../theme/components";
import { InputStyles, InputStylesProps } from "./styles";
import theme from "../../theme/theme";
import Eye from "@assets/icon/Eye.svg";
import EyeClosed from "@assets/icon/Eye Closed.svg";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

type InputProps = {
  control: Control<FieldValues>;
  name: string;
  label?: string;
  placeholder?: string;
  errors?: FieldErrors<FieldValues>;
  required?: boolean;
  messageErro?: string;
  autoFocus?: string;
  resetPassword?: boolean;
  eye?: boolean;
} & TextInputProps &
  InputStylesProps;

export function LabelAndInput({
  control,
  required,
  placeholder,
  name,
  label,
  errors,
  resetPassword,
  eye,
  size,
  ...rest
}: InputProps) {
  const [eyeClosed, setEyeClosed] = useState(false);
   
  const { navigate } = useNavigation();

  return (
    <View style={{ alignItems: "flex-start" }}>
      <Text>
        {label}{" "}
        <Text style={{ color: theme.COLORS.debug }}>{required && "*"}</Text>
      </Text>
      <Controller
        control={control}
        rules={{
          required: required,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputStyles size={size}>
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              secureTextEntry={eyeClosed ? true : false}
              onChangeText={onChange}
              value={value}
              style={{ flex: 1 }}
              {...rest}
            />
            {eye && (
              <TouchableOpacity onPress={() => setEyeClosed(prev => !prev)}>
                {eyeClosed ? <EyeClosed /> : <Eye />}
              </TouchableOpacity>
            )}
          </InputStyles>
        )}
        name={name}
      />

      <End>
        {resetPassword && (
          <TouchableOpacity onPress={() => navigate("Reset")}>
            <Text style={{ color: theme.COLORS.blue500 }}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        )}
      </End>
    </View>
  );
}
