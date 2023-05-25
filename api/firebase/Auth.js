import AsyncStorage from "@react-native-async-storage/async-storage";

export const signInWithGoogle = async (authentication, authDispatch) => {
  if (!authentication) return;

  try {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${authentication.accessToken}` },
    });
    const user = await response.json();
    await AsyncStorage.setItem("@user", JSON.stringify(user));
    authDispatch({ type: "LOGIN_SUCCESSFULLY", payload: user });
  } catch (error) {
    console.log(error);
    authDispatch({ type: "LOGIN_ERROR" });
  }
};
