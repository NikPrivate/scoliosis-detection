import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const Treatment = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header1}>About Treatment{"\n"}</Text>
        <View style={styles.card1}>
          <Text style={styles.textHeader}>
            Treatment typically refers to the actions or interventions
            undertaken to alleviate symptoms, cure, or manage a medical
            condition or disease.
            {"\n"}
            {"\n"}
            It can involve medications, therapies, lifestyle changes, surgical
            procedures, or a combination thereof, tailored to the specific needs
            and health goals of the individual.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/jp-g9iPU7j8/maxresdefault.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Observation</Text>
          <Text>
            For mild curves, doctors often recommend regular monitoring through
            physical exams and X-rays to track the progression of the curve.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://www.houstonmethodist.org/-/media/images/contenthub/article-images/physical-therapy/hub_physicaltherapy_article.ashx",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Physical Therapy</Text>
          <Text>
            Helps strengthen muscles and improve posture, but does not stop the
            progression of scoliosis.
          </Text>
        </View>
        <View>
          <Text>{"\n"}</Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={{
              uri: "https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.header2}>Surgery</Text>
          <Text>
            Common surgical procedures include spinal fusion, where vertebrae
            are fused together to correct and stabilize the spine, and the
            insertion of growing rods in children to allow for spinal growth.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Treatment;

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
