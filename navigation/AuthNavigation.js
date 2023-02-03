import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import colors from "../assets/colors/color";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen
        name="login"
        component={SigninScreen}
        options={{
          title: "SignIn",
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{
          title: "SignUp",
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
