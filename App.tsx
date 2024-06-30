import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import { ScreenStyle } from "./src/theme/components";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { MyStack } from "./src/routes/stack";
import { StatusBar } from "react-native";
import theme from "./src/theme/theme";
import { FinalizeRegistration } from "./src/screens/modules/Account/FinalizeRegistration/finalizeregistration";
import { Congratulations } from "@screens/modules/Account/Congratulations/congratulations";
import { AuthProvider } from "src/context/AuthProvider";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <AuthProvider>
            <MyStack />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
