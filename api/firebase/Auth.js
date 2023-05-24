import * as AuthSession from "expo-auth-session";
import { AuthConfig } from "./Config";

export const signInWithGoogle = async (dispatch) => {
  try {
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
    const result = await AuthSession.startAsync({
      authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
        AuthConfig.webClientId
      }&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&response_type=token&scope=${AuthConfig.scopes.join("%20")}`,
    });

    if (result.type === "success" && result.params.error !== "access_denied") {
      const { accessToken, idToken, refreshToken, ...userInfo } = result.params;
      // Aquí puedes utilizar los tokens y la información del usuario
      dispatch({
        type: "LOGIN_SUCCESSFULLY",
        payload: userInfo,
      });
    } else if (result.params.error === "access_denied") {
      console.log("Inicio de sesión cancelado por el usuario");
    }
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    dispatch({
      type: "LOGIN_ERROR",
    });
  }
};
