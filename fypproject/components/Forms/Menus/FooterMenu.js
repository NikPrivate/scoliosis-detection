import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";

const FooterMenu = () => {
  //hooks
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5
          name="home"
          style={styles.iconStyle}
          color={route.name === "Home" && "blue"}
        />
        <Text>Home</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => navigation.navigate("Detection")}>
        <FontAwesome5
          name="camera"
          style={styles.iconStyle}
          color={route.name === "Detection" && "#1A5319"}
        />
        <Text>Detection</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <FontAwesome5
          name="home"
          style={styles.iconStyle}
          color={route.name === "About" && "#1A5319"}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <FontAwesome5
          name="user"
          style={styles.iconStyle}
          color={route.name === "Account" && "#1A5319"}
        />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // adjust as needed
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fffbf0", // or any other color to match your footer
    flexDirection: "row",
    borderRadius: 10,
    borderTopWidth: 0,
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
});

export default FooterMenu;
