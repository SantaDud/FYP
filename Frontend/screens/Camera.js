import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import ImageViewer from "../Componenets/ImageViewer";
import Button from "../Componenets/Button";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("../assets/WheatPlaceholder.png");

export default function Camera({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [hasDetected, setHasDetected] = useState(false);
  const [detectedDisease, setDetectedDisease] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setIsImageSelected(true);
    }
  };

  const takeImageAsync = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setIsImageSelected(true);
    }
  };

  const navigate = () => {
    if (detectedDisease == "Root Rot") navigation.navigate("RootRot");
    else if (detectedDisease == "Stripe Rust")
      navigation.navigate("StripeRust");
    else if (detectedDisease == "Loose Smut") navigation.navigate("LooseSmut");
    else if (detectedDisease == "Septoria") navigation.navigate("Septoria");
  };

  const detectDiseaseAsync = async () => {
    setIsImageSelected(false);
    setIsDetecting(true);

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = selectedImage;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append("file", { uri: localUri, name: filename, type });

    const response = await fetch(
      "https://242c-39-34-142-43.ngrok-free.app/predict/",
      {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    ).catch((err) => console.error(err));

    const data = await response.json();

    setIsDetecting(false);
    setHasDetected(true);
    setDetectedDisease(data["prediction"]);
  };

  if (isImageSelected) {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
        </View>
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Detect Disease"
            onPress={detectDiseaseAsync}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (isDetecting) {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
        </View>
        <View style={styles.footerContainer}>
          <ActivityIndicator size={100} color="#00ff00" />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (hasDetected) {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text
            style={
              detectedDisease == "Healthy"
                ? styles.healthyText
                : styles.diseaseText
            }
          >
            Detected: {detectedDisease}
          </Text>
          {detectedDisease == "Healthy" ? null : (
            <Button label="View Details" theme="secondary" onPress={navigate} />
          )}
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Take a photo" onPress={takeImageAsync} />
        <Button label="Choose a photo" onPress={pickImageAsync} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    flex: 1.5,
    width: "100%",
    paddingTop: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    paddingTop: 5,
  },
  healthyText: {
    color: "#0f0",
    fontSize: 24,
  },
  diseaseText: {
    color: "#f00",
    fontSize: 24,
  },
});
