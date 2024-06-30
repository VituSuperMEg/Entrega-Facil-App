import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/modules/App/Home/home";
import HomeSVG from '@assets/icon/Home.svg';
import theme from "@theme/theme";

const T = createBottomTabNavigator();


export default function Tab() {
    return (
        <T.Navigator screenOptions={({ route}) => ({
            headerShown : false,
            tabBarShowLabel : false,
            tabBarIcon: ({focused, color, size}) => {
                if(route.name === 'Home') {
                    return (
                        <HomeSVG color={theme.COLORS.blue200}/>
                    )
                }
            }
        })}>
          <T.Screen name="Home" component={Home} />
        </T.Navigator>
    );
  }