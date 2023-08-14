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

export default function LeafRust() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Leaf Rust</Text>
      <Text style={styles.subtext}>Fungus</Text>
      <Card.Cover
        source={require("../assets/leafrust.jpeg")}
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
              • Orange-Brown Pustules {"\n"}
              {"\n"}• Black Teliospores{"\n"}
              {"\n"}
              Leaf rust is caused by the fungus Puccinia triticina.{"\n"}
              Leaf rust, like other cereal rusts, requires a living host to
              survive from one season to the next. The most important host for
              rusts in Australia are susceptible volunteer wheat plants growing
              during the summer and autumn. Rust cannot carry over from one
              season to the next on seed, stubble or in soil. Wheat varieties
              susceptible to leaf rust enable inoculum levels to build up on
              volunteers during the summer and autumn. This can be a problem in
              seasons following wet summers that favour the growth of self-sown
              wheat. Plants that become heavily infected with rust in the autumn
              provide a source of rust for the new season's wheat crop. If these
              conditions are followed by a mild winter and a warm wet spring,
              then the chances of a leaf rust epidemic are high. Therefore, the
              chances of a rust epidemic are greatest following a wet summer.
              {"\n"}
              In Australia, due to the absence of the alternate host, leaf rust
              reproduces asexually. This reduces the variability of the rusts in
              the field and therefore increases the likelihood that resistant
              varieties will be effective for a long period of time.{"\n"}
              Rust spores are wind-blown and can be spread over large areas in a
              short time. The establishment of leaf rust epidemics within a crop
              is favoured by wet conditions and temperatures of in the range of
              15-22°C.{"\n"}
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
              <Text style={styles.spraytext}>
                Bonide Liquid Copper Fungicide
              </Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>
                Bonide Sulfur Plant Fungicide
              </Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Baking Soda</Text>
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
