import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../../../screens/auth/Register";
import Login from "../../../screens/auth/Login";
import { AuthContext } from "../../../context/authContext";
import HeaderMenu from "./HeaderMenu";
import About from "../../../screens/About";
import Account from "../../../screens/Account";
import Treatment from "../../../screens/Treatment";
import Symptoms from "../../../screens/Symptoms";
import Cause from "../../../screens/Cause";
import { Header } from "react-native/Libraries/NewAppScreen";
import Detection from "../../../screens/Detection";

const ScreenMenu = () => {
  //global state
  const [state] = useContext(AuthContext);
  //auth condition true false
  const authenticatedUser = state?.user && state?.token;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticatedUser ? (
        <>
          <Stack.Screen
            name="About"
            component={About}
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              title: "",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Detection"
            component={Detection}
            options={{
              title: "",
            }}
          />
          <Stack.Screen
            name="Treatment"
            component={Treatment}
            options={{
              title: "",
            }}
          />
          <Stack.Screen
            name="Symptoms"
            component={Symptoms}
            options={{
              title: "",
            }}
          />
          <Stack.Screen
            name="Cause"
            component={Cause}
            options={{
              title: "",
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;

const styles = StyleSheet.create({});
