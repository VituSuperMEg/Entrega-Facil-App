import { createStackNavigator } from "@react-navigation/stack";
import { Board } from "@screens/Board/board";
import { Congratulations } from "@screens/modules/Account/Congratulations/congratulations";
import { FinalizeRegistration } from "@screens/modules/Account/FinalizeRegistration/finalizeregistration";
import { Login } from "@screens/modules/Account/Login/login";
import { PersonalData } from "@screens/modules/Account/PersonalData/personaldata";
import { ResetPassword } from "@screens/modules/Account/ResetPassword/resetpassword";
import { SignUp } from "@screens/modules/Account/SignUp/singin";
import Tab from "./tab";
import { ScreenStyle } from "@theme/components";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Board" component={Board} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Criar" component={SignUp} />
      <Stack.Screen name="Finalize" component={FinalizeRegistration} />
      <Stack.Screen name="Personal" component={PersonalData} />
      <Stack.Screen name="Congratulations" component={Congratulations} />
      <Stack.Screen name="Reset" component={ResetPassword} />
      <Stack.Screen name="Tabs" component={Tab} />
    </Stack.Navigator>
  );
}
