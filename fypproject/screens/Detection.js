import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import FooterMenu from "../components/Forms/Menus/FooterMenu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const URL =
  "https://inf-6460ef1c-6a22-45b0-9a7a-c86f13cc4c24-no4xvrhsfq-uc.a.run.app/detect"; // copy and paste your URL here
const FALLBACK_URL = ""; // copy and paste your fallback URL here

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function detect({
  imageFile,
  url = URL,
  confThres = 0.25,
  iouThres = 0.45,
  ocrModel = undefined,
  ocrClasses = undefined,
  ocrLanguage = undefined,
  retries = 10,
  delay = 0,
} = {}) {
  const data = new FormData();
  data.append("image", {
    uri: imageFile.uri,
    type: "image/jpeg",
    name: "image.jpg",
  });
  data.append("conf_thres", confThres);
  data.append("iou_thres", iouThres);
  if (ocrModel !== undefined) {
    data.append("ocr_model", ocrModel);
  }
  if (ocrClasses !== undefined) {
    data.append("ocr_classes", ocrClasses);
  }
  if (ocrLanguage !== undefined) {
    data.append("ocr_language", ocrLanguage);
  }
  try {
    const response = await axios({
      method: "post",
      url: url,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 0 || error.response.status === 413)
        throw new Error(
          "image too large, please select an image smaller than 25MB."
        );
      else if (error.response.status === 403)
        throw new Error(
          "you reached your monthly requests limit. Upgrade your plan to unlock unlimited requests."
        );
      else if (error.response.data)
        throw new Error(error.response.data.message);
    } else if (retries > 0) {
      if (delay > 0) await sleep(delay);
      return await detect({
        imageFile,
        url: FALLBACK_URL ? FALLBACK_URL : URL,
        confThres,
        iouThres,
        ocrModel,
        ocrClasses,
        ocrLanguage,
        retries: retries - 1,
        delay: 2,
      });
    } else {
      return [];
    }
  }
}

export default function TheosAPI() {
  const [detecting, setDetecting] = useState(false);
  const [detected, setDetected] = useState(false);
  const [detections, setDetections] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
      setDetecting(true);
      setDetected(false);
      setDetections([]);
      setError("");
      detect({ imageFile: result.assets[0] })
        .then((detections) => {
          setDetected(true);
          setDetecting(false);
          setDetections(
            detections.length > 0
              ? `${detections
                  .map(
                    (detection, index) =>
                      `\nResult: ${detection.class}\n\n‣ Confidence: ${
                        detection.confidence * 100
                      }%`
                  )
                  .join("")}`
              : "No objects found."
          );
        })
        .catch((error) => {
          setError(error.message);
          setDetecting(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Scoliosis Detection</Text>
        {detecting ? (
          <ActivityIndicator size="large" color="#508D4E" />
        ) : (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Select an Image</Text>
            </TouchableOpacity>
          </View>
        )}
        {image && <Image source={{ uri: image.uri }} style={styles.image} />}
        {detected && (
          <View style={styles.detectionContainer}>
            <FontAwesome5 name="poll" style={styles.iconStyle} />
            <Text style={styles.detectionText}>{detections}</Text>
          </View>
        )}
        {error && <Text style={styles.errorText}>{error}</Text>}
      </ScrollView>
      <View>
        <FooterMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#D6EFD8",
  },
  scrollContent: {
    paddingBottom: 80, // add some padding at the bottom for the footer
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 250,
    marginVertical: 20,
    alignSelf: "center",
  },
  detectionContainer: {
    backgroundColor: "#80AF81",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  detectionText: {
    fontSize: 23,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#508D4E",
    height: 40,
    width: 250,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 35,
  },
});
