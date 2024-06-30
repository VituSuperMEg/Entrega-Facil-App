import { useForm } from "react-hook-form";
import { LabelAndInput } from "@components/Form/labelandinput";
import { Between, Center, Text } from "@theme/components";
import { TouchableOpacity, View } from "react-native";
import { Button } from "@components/Button/button";
import { useNavigation } from "@react-navigation/native";
import { CircleAction } from "@components/CircleAction/circleaction";
import { api } from "@services/api";
import theme from "@theme/theme";
import Apple from '@assets/icon/apple.svg';
import Google from '@assets/icon/google.svg';
import Facebook from '@assets/icon/facebook.svg';

type SingUpType = {
  email: string;
  senha : string;
  nome: string;
  photo? : string;
}
export function SignUp() {
  const { control, handleSubmit, formState : { errors }} = useForm({
    defaultValues : {
      nome : '',
      email : '',
      senha : ''
    }
  });

  const {
    goBack,
    navigate
  } = useNavigation();

  const onSubmit = async (data : SingUpType) => {
    const res = await api.post('v1/users', {
      nome : data.nome,
      email : data.email,
      password : data.senha,
      photo : data.photo ? data.photo : null,
    });

    if(res) {
      navigate('Finalize', {
        params : {
           email : data.email
        }
      });
    }
  }
  return (
    <Between direction="column" algin="center">
      <View style={{ marginTop: 50, width: "100%" }}>
        <Text size={36} color="black" weight={500}>
          Criar Conta
          <Text color="blue500" size={30}>
            .
          </Text>
        </Text>
        <Text size={15} color="text">
          Crie sua conta é rápido, fácil e importante{" "}
        </Text>
      </View>
      <View style={{ gap: 30, width: "100%" }}>
        <LabelAndInput
          control={control}
          name="nome"
          placeholder="raimundo antonio"
          label="Nome"
          required
        />
        <LabelAndInput
          control={control}
          name="email"
          placeholder="exemplo@gmail.com"
          label="E-mail"
          required
        />
        <LabelAndInput
          control={control}
          name="senha"
          placeholder="******"
          label="Senha"
          secureTextEntry
          required
        />
        <View style={{ marginTop: 40 }}>
          <Button title="Criar Conta" variant="blue500" size="lg" onPress={handleSubmit(onSubmit)}/>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap : 10 }}>
        <View
          style={{
            width: '30%',
            height: 2,
            backgroundColor: theme.COLORS.border,
          }}
        />
        <Text size={15} color="text">
          ou entre por
        </Text>
        <View
          style={{
            width: '30%',
            height: 2,
            backgroundColor: theme.COLORS.border,
          }}
        />
      </View>
      <View style={{ flexDirection : 'row', gap : 50}}>
        <CircleAction icon={<Apple />} />
        <CircleAction icon={<Google />} />
        <CircleAction icon={<Facebook fontSize={10} />} />
      </View>
      <View>
        <TouchableOpacity onPress={() => goBack()}>
          <Text size={15} color="black" weight={500}>
            Já tem conta ?{" "}
            <Text color="blue500" size={15} weight={900}>
             Entre agora.
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Between>
  );
}
