import React, { useContext } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../core/context/AuthContext";
const Login = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const navigation = useNavigation();
  const validateLogin = () => {
    authDispatch({ type: "LOGIN_SUCCESSFULLY", payload: { uid: "123" } });
  };
  return (
    <View>
      <Text>Login page</Text>
      <Button
        title="Log in"
        onPress={() => {
          authDispatch({ type: "LOGIN" });
          setTimeout(validateLogin, 2000);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text>Go to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
