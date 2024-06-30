import { Button } from "@components/Button/button";
import { LabelAndInput } from "@components/Form/labelandinput";
import { Center, Text } from "@theme/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";

export function ResetPassword() {
  const [step, setStep] = useState("email");

  const { control } = useForm();
  return (
    <>
      {step === "email" && (
        <Center style={{ justifyContent: "space-between" }}>
          <View
            style={{
              justifyContent: "flex-start",
              width: "100%",
              marginTop: 20,
            }}
          >
            <Text size={20} color="black">
              Ops! {"\n"}
              Você esqueceu sua senha? {"\n"}
              Tenha calma vamos resolver isso agora.
            </Text>
          </View>
          <LabelAndInput
            control={control}
            name="email"
            placeholder="exemplo@gmail.com"
            label="Digite seu E-mail"
            required
          />
          <Button
            title="Enviar Código de Verificação"
            variant="blue500"
            size="lg"
            onPress={() => setStep("token")}
          />
        </Center>
      )}
      {step === "token" && (
        <Center style={{ justifyContent: "space-between" }}>
          <View
            style={{
              justifyContent: "flex-start",
              width: "100%",
              marginTop: 20,
            }}
          >
            <Text size={20} color="black">
              Verifique em sua caixa de entrada, spam ou lixeira com código de
              seis dígitos.
            </Text>
            <Text size={15} color="text">
              Digite o código de{" "}
              <Text size={15} color="blue500" weight={900}>
                6 dígitos
              </Text>{" "}
              enviado ao seu e-mail.
            </Text>
          </View>
          <LabelAndInput
            control={control}
            name="token"
            placeholder="000-000"
            label="Digite o código de Verificação"
            required
          />
          <View style={{ width: "100%", gap: 10 }}>
            <Button
              title="Reenviar Código"
              variant="white"
              size="lg"
              onPress={() => setStep("token")}
            />
            <Button
              title="Enviar Código de Verificação"
              variant="blue500"
              size="lg"
              onPress={() => setStep("token")}
            />
            <Button
              title="Voltar"
              outline
              variant="blue500"
              size="lg"
              onPress={() => setStep("email")}
            />
          </View>
        </Center>
      )}
    </>
  );
}
