import * as AuthSession from "expo-auth-session";
import { AuthConfig } from "./Config";

export const signInWithGoogle = async (authentication, authDispatch) => {
  try {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${authentication.accessToken}` },
    });
    const user = await response.json();
    authDispatch({ type: "LOGIN_SUCCESSFULLY", payload: user });
    console.log("user", user);
  } catch (error) {
    console.log(error);
    authDispatch({ type: "LOGIN_ERROR" });
  }
};
