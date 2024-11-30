import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const Cause = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header1}>About Causes{"\n"}</Text>
        <View style={styles.card1}>
          <Text style={styles.textHeader}>
            Causes refer to the factors or events that contribute to the
            development of a condition or disease.
            {"\n"}
            {"\n"}
            They can be broadly categorized into genetic factors, environmental
            influences, lifestyle choices, and sometimes unknown triggers.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://cdn.who.int/media/images/default-source/mca/adolescent-health/adolescent/adolescents-ethiopia_credit_-gpe-kelley-lynch.tmb-479v.jpg?sfvrsn=a9099e3f_8%20479w",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Idiopathic Scoliosis</Text>
          <Text>
            The most common form, especially in adolescents, with no known
            specific cause.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://babyology.com.au/wp-content/uploads/2018/12/newborn-baby-mothers-arms-hospital-feature.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Congenital Scoliosis</Text>
          <Text>
            Resulting from spinal deformities present at birth due to
            malformations of the vertebrae.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://www.gillettechildrens.org/images/jcogs_img/cache/Header_Vasquez_Kiara_and_Keisy_Renteria_muscular_dystrophy_DSC_7412_-_28de80_-_d22092b0c6c87f1636cf1cb4e829e40bef1be378.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Neuromuscular Scoliosis</Text>
          <Text>
            Associated with neuromuscular conditions like cerebral palsy or
            muscular dystrophy, where the spine curves due to muscle weakness or
            imbalance.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cause;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D6EFD8",
  },
  header1: {
    fontSize: 30,
    marginLeft: 25,
    fontWeight: "bold",
    marginTop: 25,
  },
  header2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card1: {
    backgroundColor: "#1A5319",
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
    backgroundColor: "#80AF81",
    borderRadius: 20,
    padding: 20,
    paddingTop: 0,
    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
  },
  textHeader: {
    color: "#fffbf0",
    fontSize: 18,
  },
  image: {
    height: 200,
    width: 370,
    borderRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 25,
    alignSelf: "center",
  },
});
