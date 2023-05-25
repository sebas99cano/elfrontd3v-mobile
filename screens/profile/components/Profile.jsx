import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../../core/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [authState, authDispatch] = useContext(AuthContext);

  return (
    <View>
      <Text>Profile page</Text>
      <Text>{authState.email}</Text>
      <Text>{authState.name}</Text>
      <Text>{authState.id}</Text>
      <Button
        title="Log out"
        onPress={() => {
          AsyncStorage.removeItem("@user");
          authDispatch({ type: "LOGOUT_USER" });
        }}
      />
    </View>
  );
};

export default Profile;
