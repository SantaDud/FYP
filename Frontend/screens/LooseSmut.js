import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { Card, Button } from "react-native-paper";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LooseSmut() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Loose Smut</Text>
      <Text style={styles.subtext}>Fungus</Text>
      <Card.Cover
        source={require("../assets/loosesmut.jpeg")}
        style={styles.cardimage}
      />
      <ScrollView>
        <Card style={styles.card}>
          <Card.Content>
            <Card.Content style={styles.content}>
              <Button
                style={styles.inactivebutton}
                mode="text"
                buttonColor="#5CCA90"
                textColor="white"
                rippleColor="#5CCA90"
              >
                <Text style={styles.number}>1</Text>
              </Button>
              <Text style={styles.head}>Authenticate The Disease</Text>
            </Card.Content>
            <Text style={styles.text}>
              • Yellowish leaf streaks and stiff, dark green leaves {"\n"}
              {"\n"}• Sterile heads with clumped, sooty olive-black spores
              {"\n"}
              {"\n"}
              Seed-borne fungal mycelium establishes itself in the embryo of the
              seed at flowering. As the seed matures, the mycelium becomes
              dormant. When infected seed germinates the following spring, the
              mycelium begins to grow and penetrates the growing point.{"\n"}
              Wheat plants are infected only during flowering by wind blown
              spores from nearby smutted heads. Rain and insects may also
              disseminate spores at this time.{"\n"}
              The most obvious symptom occurs at heading, when kernels and
              glumes are converted to masses of black spores. The spores blow
              away, leaving a bare stem. Heads of infected plants usually emerge
              from the boot slightly earlier than normal. Prior to heading,
              plants may have dark green, erect leaves, sometimes with yellow
              streaks.{"\n"}
              Results in complete loss of kernels on infected heads. Spores are
              dispersed before harvest, therefore harvested seed quality is not
              affected.{"\n"}
            </Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Card.Content style={styles.content}>
              <Button
                style={styles.inactivebutton}
                mode="text"
                buttonColor="#5CCA90"
                textColor="white"
                rippleColor="#5CCA90"
              >
                <Text style={styles.number}>2</Text>
              </Button>
              <Text style={styles.head}>Select Treatment</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Triazoles Triadi- Menol</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Flutriafo</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Tebuconazole</Text>
            </Card.Content>
          </Card.Content>
        </Card>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  spraytext: {
    marginTop: 40,
    marginLeft: 10,
  },
  image: {
    marginTop: 30,
    marginLeft: 20,
    height: 40,
    width: 40,
  },
  content: {
    flexDirection: "row",
  },
  inactivebutton: {
    height: 60,
    width: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  number: {
    color: "white",
    paddingTop: 16,
    fontSize: 27,
  },
  card: {
    backgroundColor: "white",
    overflow: "scroll",
    shadowOffset: 10,
    shadowOpacity: 50,
    marginBottom: 20,
  },
  cardimage: {
    height: 150,
    shadowOffset: 10,
    shadowOpacity: 50,
    width: windowWidth - 20,
    margin: 10,
    alignContent: "center",
  },
  header: {
    color: "#A5B400",
    fontSize: 30,
    textAlign: "left",
    marginTop: 20,
    verticalAlign: "top",
    marginLeft: 10,
  },
  subtext: {
    fontSize: 20,
    color: "#339B03",
    marginLeft: 10,
    verticalAlign: "top",
  },
  head: {
    fontSize: 20,
    marginTop: 15,
  },
  text: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    textAlign: "justify",
  },
});
