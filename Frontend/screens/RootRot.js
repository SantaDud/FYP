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

export default function RootRot() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Root Rot</Text>
      <Text style={styles.subtext}>Fungus</Text>
      <Card.Cover
        source={require("../assets/rootrot.jpeg")}
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
              • Damping off (sudden death) of emerging seedlings {"\n"}
              {"\n"}• Stunted chlorotic growth{"\n"}
              {"\n"}• Reduced root growth{"\n"}
              {"\n"}• Decay of the crown area{"\n"}
              {"\n"}
              Root and crown rot of winter wheat is caused by the infection of
              roots and crowns by Bipolaris sorokiniana and several species of
              Fusarium. The mycelium of B. sorokiniana is a deep olive-brown.
              Conidiophores are single or clustered, simple, erect and with
              septations. Conidia are olive-brown and ovate to oblong with
              tapered ends, are three to 10-septate and slightly curved. The
              teleomorph is Cociobolus sativus, an ascomycete. Fusarium
              graminearum and F. culmorum are the most common Fusarium spp.
              causing root and crown rots in winter wheat. Other species include
              F. avenaceum and F. poe. Fusarium spp. survive in the soil in host
              debris as perithecia (sexual fruiting structures) chlamydospores
              (asexual survival structures), or as mycelium. They also can be
              seedborne.F. graminearum also causes Fusarium head blight or scab.
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
              <Text style={styles.spraytext}>Thiophanate-Methyl</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Polyoxin-D</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Triflumizole</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Fludioxonil</Text>
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
