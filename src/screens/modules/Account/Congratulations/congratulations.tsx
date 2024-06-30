import { SlideComponents } from "@components/Slide/slide-components";
import { Button } from "@components/Button/button";

import img5 from "@assets/img/img5.png";
import { useNavigation } from "@react-navigation/native";

export function Congratulations() {

  const { navigate } = useNavigation();

  return (
    <SlideComponents
      title="Cadastrado Finalizado com sucesso"
      img={img5}
      subtitle="mantenha-se sempre informado sobre o paradeiro dos seus pacotes"
      button1={<Button title="Continunar" variant="blue500" size="lg" onPress={() => navigate('Login')}/>}
    />
  );
}
