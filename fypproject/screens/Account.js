import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Touchable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/Forms/Menus/FooterMenu";
import axios from "axios";

const Account = () => {
  //global state
  const [state, setState] = useContext(AuthContext);
  const { user, token } = state;
  //local state
  const [name, setName] = useState(user?.name);
  const [password, setPassword] = useState(user?.password);
  const [email] = useState(user?.email);
  const [loading, setLoading] = useState(false);

  //handle update user data

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put("/auth/update-user", {
        name,
        password,
        email,
      });
      setLoading(false);
      let UD = JSON.stringify(data);
      setState({ ...state, user: UD?.updatedUser });
      alert(data && data.message);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://cdn-icons-png.freepik.com/512/6058/6058696.png",
              }}
              style={{ height: 200, width: 200, borderRadius: 100 }}
            />
          </View>
          <Text style={styles.warningText}>
            Currently You Can Only Update Your Name And Password
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput
              style={styles.inputBox}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput style={styles.inputBox} value={email} editable={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.inputBox}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Role</Text>
            <TextInput
              style={styles.inputBox}
              value={state?.user.role}
              editable={false}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
              <Text style={styles.updateBtnText}>
                {loading ? "Please Wait" : "Update Profile"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footContain}>
          <FooterMenu />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollContent: {
    paddingBottom: 80, // add some padding at the bottom for the footer
  },
  footContain: {
    position: "static",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  warningText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  inputLabel: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 15,
    marginBottom: 5,
  },
  inputText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  inputBox: {
    width: "100%",
    height: 47,
    backgroundColor: "#f0f0f0",
    fontSize: 16,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  updateBtn: {
    backgroundColor: "#508D4E",
    height: 45,
    width: 250,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  updateBtnText: {
    color: "#ffffff",
    fontSize: 18,
  },
});
