import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FooterMenu from "../components/Forms/Menus/FooterMenu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";

const About = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => navigation.navigate("Treatment")}>
          <View style={styles.card1}>
            <Image
              source={{
                uri: "https://cdn-icons-png.freepik.com/512/7995/7995035.png",
              }}
              style={styles.image}
            />
            <Text style={styles.heading}>Treatment</Text>
            <FontAwesome5 name="arrow-right" style={styles.iconStyle} />
          </View>
        </TouchableOpacity>

        <View>
          <Text>{"\n"}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Symptoms")}>
          <View style={styles.card2}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1453/1453667.png",
              }}
              style={styles.image}
            />
            <Text style={styles.heading}>Symptoms</Text>
            <FontAwesome5 name="arrow-right" style={styles.iconStyle} />
          </View>
        </TouchableOpacity>

        <View>
          <Text>{"\n"}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Cause")}>
          <View style={styles.card3}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2779/2779920.png",
              }}
              style={styles.image}
            />
            <Text style={styles.heading}>Cause</Text>
            <FontAwesome5 name="arrow-right" style={styles.iconStyle} />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <FooterMenu />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollContent: {
    paddingBottom: 80, // add some padding at the bottom for the footer
  },
  heading: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  card1: {
    backgroundColor: "#80AF81",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card2: {
    backgroundColor: "#D6EFD8",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card3: {
    backgroundColor: "#80AF81",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 50,
    marginBottom: 25,
    alignSelf: "center",
  },
  iconStyle: {
    paddingLeft: 290,
    fontSize: 20,
  },
});
