import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../core/context/AuthContext";
import { Colors as Colors } from "../../../constants/constants";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthConfig } from "../../../api/firebase/Config";
import { signInWithGoogle } from "../../../api/firebase/Auth";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [, authDispatch] = useContext(AuthContext);
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      clientId: AuthConfig.webClientId,
      iosClientId: AuthConfig.iosClientId,
      androidClientId: AuthConfig.androidClientId,
    },
    { authorizationEndpoint: "https://www.googleapis.com/userinfo/v2/me" }
  );

  useEffect(() => {
    if (response?.type === "success") {
      signInWithGoogle(response.authentication, authDispatch);
    }
  }, [response]);

  const validateLogin = () => {
    authDispatch({
      type: "LOGIN_SUCCESSFULLY",
      payload: { email: "elfrontdev@gmail.com" },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Frontd3v</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor={Colors.backgroundColor}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor={Colors.backgroundColor}
          onChangeText={(text) => setUserData({ ...userData, password: text })}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          authDispatch({ type: "LOGIN" });
          setTimeout(validateLogin, 2000);
        }}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        disabled={!request}
        onPress={() => {
          promptAsync();
        }}
      >
        <Text style={styles.loginText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 45,
    color: Colors.primary,
    marginBottom: 40,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  inputView: {
    width: "80%",
    backgroundColor: Colors.lightBackground,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: Colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 16,
  },
});

export default Login;
