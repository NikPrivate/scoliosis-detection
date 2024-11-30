import { View, Text, TextInput, Alert, Image, ScrollView } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import registerStyle from "../../style/registerStyle";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Login = ({ navigation }) => {
  //states

  //global states

  const [state, setState] = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //function
  //btn function
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post("/auth/login", { email, password });
      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      alert(data && data.message);
      navigation.navigate("About");
      console.log("Login Data==> ", { email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  //temp function to check local storage data
  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Local Storage ===> ", data);
  };
  getLocalStorageData();
  return (
    <View style={registerStyle.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://www.srs.org/Files/Scoliosis-Awareness-Month/ScoliosisAwarenessRibbon_DarkGreen.png",
          }}
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            marginBottom: 25,
          }}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
      <SubmitButton
        btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={registerStyle.linkText}>
        Not A User Please{" "}
        <Text
          style={registerStyle.link}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>{" "}
      </Text>
    </View>
  );
};

export default Login;
