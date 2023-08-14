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

export default function StripeRust() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Stripe Rust</Text>
      <Text style={styles.subtext}>Fungus</Text>
      <Card.Cover
        source={require("../assets/striperust.jpeg")}
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
              • Pre Pustules (Yellow Streaks) {"\n"}
              {"\n"}• Small, bright yellow, elongated uredial pustules arranged
              in conspicuous rows on the leaves, leaf sheaths, glumes and awns
              {"\n"}
              {"\n"}
              Stripe rust is caused by Puccinia striiformis f.sp. tritici. The
              fungus is dispersed as wind-blown spores which produce new
              infections. This cycle is repeated many times during the cropping
              season causing epidemics to develop.{"\n"}
              Conditions suitable for epidemic development occur from April to
              December in Victoria, and stripe rust can be expected in
              susceptible crops by September in most years. {"\n"}
              The fungus has a wide temperature range, but its optimum is 6-12°C
              with a minimum of 3 hours of leaf-wetness (for example, dew) for
              new infections to occur. Once an infection is established the
              fungus can survive short periods of temperatures higher than 40°C.
              {"\n"}
              Following infection of the leaf the fungus grows without symptoms
              within the leaf for 14 to 28 days (or longer depending on
              temperature) until the spores appear on the leaf surface as
              pustules. The time between initial infection and symptom
              development is known as the latent period, with this time reducing
              as temperatures warm during the spring. The spores are then spread
              by wind, allowing the cycle to repeat multiple times during the
              season.{"\n"}
              Stripe rust survives from one season to the next predominantly on
              volunteer self-sown cereals but can also survive to a lesser
              extent on other cereal and grass weeds that grow over summer and
              is known as the ‘green bridge’. Consequently stripe rust epidemics
              are usually more severe in seasons following wet summers that have
              supported the ‘green bridge’.
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
              <Text style={styles.spraytext}>Aviator Xpro</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Prosaro</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Fertilizer Treatment</Text>
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
