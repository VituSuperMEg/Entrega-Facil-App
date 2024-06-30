import { useForm } from "react-hook-form";
import { LabelAndInput } from "@components/Form/labelandinput";
import { Between, Center, Text } from "@theme/components";
import { TouchableOpacity, View } from "react-native";
import { Button } from "@components/Button/button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from "@services/api";

type PersonalDataType = {
  cpf: string;
  rua: string;
  cep: string;
  numero: string;
  uf: string;
  complemento: string;
};
export function PersonalData() {
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cpf: "",
      rua: "",
      cep: "",
      numero: "",
      uf: "",
      complemento: "",
    },
  });

  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();

  const onSubmit = async (data: PersonalDataType) => {
    let nData = {
      email : params?.params?.email,
      ...data
    }
    console.log(nData)
    const res = await api.post("v1/users/personal", {
      nData
    });
    if(res.status === 201) {
       navigate("Congratulations");
    }
  };
  return (
    <Between direction="column" algin="center">
      <View style={{ marginTop: 50, width: "100%" }}>
        <Text size={36} color="black" weight={500}>
          Finalizar Conta
          <Text color="blue500" size={30}>
            .
          </Text>
        </Text>
        <Text size={15} color="text">
          Crie sua conta é rápido, fácil e importante{" "}
        </Text>
      </View>
      <View
        style={{ gap: 30, width: "100%", flex: 1, justifyContent: "center" }}
      >
        <LabelAndInput
          control={control}
          name="cpf"
          placeholder="000.000.000-00"
          label="CPF"
          required
        />
        <LabelAndInput
          control={control}
          name="rua"
          placeholder="rua do seu zé"
          label="Rua"
          required
        />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <LabelAndInput
            control={control}
            name="cep"
            placeholder="******"
            label="CEP"
            size={150}
            required
          />
          <LabelAndInput
            control={control}
            name="numero"
            placeholder="******"
            label="Número"
            size={110}
            required
          />
          <LabelAndInput
            control={control}
            name="uf"
            placeholder="******"
            label="UF"
            size={70}
            required
          />
        </View>
        <LabelAndInput
          control={control}
          name="complemento"
          placeholder="rua do seu zé"
          label="Complemento"
        />
        <View />
        <View style={{ marginTop: 40 }}>
          <Button
            title="Finalizar Cadastro!"
            variant="blue500"
            size="lg"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
      <View />
    </Between>
  );
}
