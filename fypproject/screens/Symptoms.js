import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const Symptoms = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header1}>About Symptoms{"\n"}</Text>
        <View style={styles.card1}>
          <Text style={styles.textHeader}>
            Symptoms are the physical or subjective experiences that indicate a
            person may have a particular condition or disease.
            {"\n"}
            {"\n"}
            These experiences can include pain, discomfort, changes in bodily
            functions, altered appearance, or emotional shifts. Symptoms provide
            crucial clues for healthcare professionals to diagnose and treat
            medical issues effectively.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://posture-works.com/wp-content/uploads/2023/03/shutterstock_2092574974-1024x764.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Visible Signs</Text>
          <Text>
            Uneven shoulders, waist, or hips. One shoulder blade may appear more
            prominent than the other. One side of the rib cage may appear higher
            when bending forward.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://www.scoliosissos.com/news/image-209.jpeg?picture=/chest-pain.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Physical Discomfort</Text>
          <Text>
            Back pain, which is more common in adults. In severe cases,
            scoliosis can lead to difficulty breathing due to reduced space
            within the chest for lung expansion.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://cdn.shopify.com/s/files/1/0561/4102/1322/files/16.19_2048x2048.jpg?v=1708475140",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Other Indicators</Text>
          <Text>
            Asymmetry in body posture. Changes in gait or walking pattern
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Symptoms;

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
