import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors as Colors } from "../../../constants/constants";
import * as WebBrowser from "expo-web-browser";
import useLogin from "../hooks/useLogin";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const { userData, setUserData, navigation, request, promptAsync } =
    useLogin();
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
      <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orLoginWith}>Or, login with ...</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          disabled={!request}
          onPress={promptAsync}
        >
          <MaterialCommunityIcons
            name="google-plus"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons
            name="facebook"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons
            name="github"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
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
    marginTop: 15,
  },
  loginText: {
    color: "white",
    fontSize: 16,
  },
  orLoginWith: {
    marginTop: 20,
    color: "white",
    fontSize: 16,
  },
  socialContainer: {
    width: "80%",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default Login;
