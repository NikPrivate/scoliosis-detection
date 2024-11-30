import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import registerStyle from "../../style/registerStyle";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";

const Register = ({ navigation }) => {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //function
  //btn function
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      alert(data && data.message);
      navigation.navigate("Login");
      console.log("Register Data==> ", { name, email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={registerStyle.container}>
      <Text style={registerStyle.pageTitle}>Welcome to ScoliAI</Text>
      <View style={registerStyle.card}>
        <Text style={registerStyle.info}>
          Creating your account now to start your scoliosis detection journey.
        </Text>
        <InputBox inputTitle={"Name"} value={name} setValue={setName} />
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

        {/* <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text> */}
        <SubmitButton
          btnTitle="Register"
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <Text style={registerStyle.linkText}>
          Already Register Please{" "}
          <Text
            style={registerStyle.link}
            onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </Text>{" "}
        </Text>
      </View>
    </View>
  );
};

export default Register;
