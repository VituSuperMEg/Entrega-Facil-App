import { useForm } from "react-hook-form";
import { LabelAndInput } from "@components/Form/labelandinput";
import { Between, Center, Text } from "@theme/components";
import { TouchableOpacity, View } from "react-native";
import { Button } from "@components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { CircleAction } from "@components/CircleAction/circleaction";
import Apple from "@assets/icon/apple.svg";
import Google from "@assets/icon/google.svg";
import Facebook from "@assets/icon/facebook.svg";

import theme from "@theme/theme";
import { api } from "@services/api";
import { useAuth } from "src/store/auth";
import { decoded } from "@services/jwt";

type LoginType = {
  login: string;
  password: string;
};

export function Login() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const { navigate } = useNavigation();
  const setToken = useAuth(state => state.setToken);
  const setUser = useAuth(state => state.setUser);

  const onSubmit = async (values: LoginType) => {
    const res = await api.post("api/login", values);
    const result = decoded(res.data.access_token);
    setToken(res.data.access_token);
    setUser(result.user);
  };

  return (
    <Between direction="column" algin="center">
      <View style={{ marginTop: 50, width: "100%" }}>
        <Text size={36} color="black" weight={500}>
          Login
          <Text color="blue500" size={30}>
            .
          </Text>
        </Text>
        <Text size={15} color="text">
          Oi bem-vindo de volta, você foi pedido?
        </Text>
      </View>
      <View />
      <View style={{ gap: 30, width: "100%" }}>
        <LabelAndInput
          control={control}
          name="login"
          placeholder="exemplo@gmail.com"
          label="Login"
          required
        />
        <LabelAndInput
          control={control}
          name="password"
          placeholder="******"
          label="Senha"
          required
          resetPassword
          eye
        />
        <View style={{ marginTop: 40 }}>
          <Button
            title="Entrar"
            variant="blue500"
            size="lg"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            width: "30%",
            height: 2,
            backgroundColor: theme.COLORS.border,
          }}
        />
        <Text size={15} color="text">
          ou entre por
        </Text>
        <View
          style={{
            width: "30%",
            height: 2,
            backgroundColor: theme.COLORS.border,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", gap: 50 }}>
        <CircleAction icon={<Apple />} />
        <CircleAction icon={<Google />} />
        <CircleAction icon={<Facebook fontSize={10} />} />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigate("Criar")}>
          <Text size={15} color="black" weight={500}>
            Quer fazer a sua ?{" "}
            <Text color="blue500" size={15} weight={900}>
              Criar conta.
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View />
    </Between>
  );
}
