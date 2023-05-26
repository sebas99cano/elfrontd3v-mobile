import { useContext, useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import { AuthConfig } from "../../../api/firebase/Config";
import { signInWithGoogle } from "../../../api/firebase/Auth";
import { AuthContext } from "../../../core/context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const useLogin = () => {
  const [, authDispatch] = useContext(AuthContext);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      clientId: AuthConfig.webClientId,
      iosClientId: AuthConfig.iosClientId,
      androidClientId: AuthConfig.androidClientId,
    },
    { authorizationEndpoint: "https://www.googleapis.com/userinfo/v2/me" }
  );

  const navigation = useNavigation();

  useEffect(() => {
    if (response?.type === "success") {
      signInWithGoogle(response.authentication, authDispatch);
    }
  }, [response]);

  return { userData, setUserData, navigation, request, promptAsync };
};

export default useLogin;
