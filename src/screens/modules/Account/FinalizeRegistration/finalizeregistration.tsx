import { SlideComponents } from "@components/Slide/slide-components";
import { Button } from "@components/Button/button";

import img4 from "@assets/img/img4.png";
import { useNavigation, useRoute } from "@react-navigation/native";

export function FinalizeRegistration() {

  const { navigate } = useNavigation();
  const { params } = useRoute();

  return (
    <SlideComponents
      title="Falta pouco para você finalizar seu cadastro!"
      img={img4}
      subtitle="mantenha-se sempre informado sobre o paradeiro dos seus pacotes"
      button1={<Button title="Continunar" variant="blue500" size="lg" onPress={() => navigate('Personal', {
        params : {
          email : params.params.email
        }
      })}/>}
      button2={<Button title="Fazer Depois" variant="white" size="lg" />}
    />
  );
}
