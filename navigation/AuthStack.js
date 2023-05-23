import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/auth/components/Login";
import SignUp from "../screens/auth/components/SignUp";

const StackNavigator = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <StackNavigator.Navigator initialRouteName="Login">
      <StackNavigator.Screen
        name="Login"
        component={Login}
        options={{ headerBackTitleVisible: false }}
      />
      <StackNavigator.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerBackTitleVisible: false }}
      />
    </StackNavigator.Navigator>
  );
};

export default AuthStack;
