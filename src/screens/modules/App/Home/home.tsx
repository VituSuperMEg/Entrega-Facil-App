import { View } from "react-native";
import { useAuth } from "src/store/auth";
import { Hero } from ".";
import { Header } from "@components/Header/header";
import { Text } from "@theme/components";
import { Actions } from "@components/Actions";
import { Search } from "@components/Search";

export const Home = () => {
  const user = useAuth((state) => state.user);
  return (
    <View>
      <Hero>
        <Header />
        <View style={{ paddingLeft: 20 }}>
          <Text color="shape" size={20}>
            👋 Bem-vindo, {user?.nome}!
          </Text>
          <Text color="border" size={15}>
            Digite o numero de seu pedido
          </Text>
          <Search />
        </View>
      </Hero>

      <Actions />
    </View>
  );
};
