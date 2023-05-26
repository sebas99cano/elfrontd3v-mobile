/* eslint-disable no-unused-vars */
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors6 as Colors } from "../../../constants/constants";
import { useNavigation } from "@react-navigation/native";
const Earnings = () => {
  const navigate = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigate.navigate("AddEarning")}
      >
        <Text style={styles.buttonText}>Add earning</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Earning list</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.backgroundColor },
  title: {
    fontWeight: "bold",
    fontSize: 45,
    color: Colors.primary,
    marginBottom: 40,
  },
  addButton: {
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Earnings;
