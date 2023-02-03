import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="login" component={SigninScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
