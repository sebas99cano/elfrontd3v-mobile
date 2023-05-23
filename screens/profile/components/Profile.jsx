import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../../core/context/AuthContext";

const Profile = () => {
  const [authState, authDispatch] = useContext(AuthContext);

  return (
    <View>
      <Text>Profile page</Text>
      <Button
        title="Log out"
        onPress={() => {
          authDispatch({ type: "LOGOUT_USER" });
        }}
      />
    </View>
  );
};

export default Profile;
