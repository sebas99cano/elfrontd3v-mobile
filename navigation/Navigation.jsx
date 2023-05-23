import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../core/context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function Navigation() {
  const [authState, authDispatch] = useContext(AuthContext);

  if (authState?.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {authState?.email ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
