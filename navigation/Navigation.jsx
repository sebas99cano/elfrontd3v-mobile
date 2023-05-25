import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../core/context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Navigation() {
  const [authState, authDispatch] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const userStorage = await AsyncStorage.getItem("@user");
    if (userStorage) {
      authDispatch({
        type: "LOGIN_SUCCESSFULLY",
        payload: JSON.parse(userStorage),
      });
    }
    setIsLoading(false);
  }

  if (isLoading || authState?.isLoading) {
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
