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

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "941100039124-5l0uci195169bk51jppalkbn7gb6lf1h.apps.googleusercontent.com",
    iosClientId:
      "941100039124-26ca5q4c7vtmfi807b0vtiunlqr8h4ht.apps.googleusercontent.com",
    androidClientId:
      "941100039124-avl8uopk32nirov1kef0mmc022kit4d4.apps.googleusercontent.com",
  });

  const navigation = useNavigation();

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
      authDispatch({ type: "LOGIN_SUCCESSFULLY", payload: user });
      console.log("dispathc", user);
    } catch (error) {
      console.log(error);
    }
  };

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
        <Text>{userInfo?.name}</Text>
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
