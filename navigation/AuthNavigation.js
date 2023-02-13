import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import OTPScreen from "../screens/OTPScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ForgotPasswordOTPScreen from "../screens/ForgotPasswordOTPScreen";

import colors from "../assets/colors/color";
import ResetForgotPasswordScreen from "../screens/ResetForgotPasswordScreen";

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
      <Stack.Screen
        name="otp"
        component={OTPScreen}
        options={{
          title: "OTP",
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
        name="forgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: "Forgot Password",
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
        name="forgotPasswordOTP"
        component={ForgotPasswordOTPScreen}
        options={{
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
        name="resetForgotPassword"
        component={ResetForgotPasswordScreen}
        options={{
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
