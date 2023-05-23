import React from "react";
import { Alert, Button, Text, View } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Auth Login</Text>
      <Button
        title="Login with google"
        onPress={() => Alert.alert("Iniciar sesión con google")}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
