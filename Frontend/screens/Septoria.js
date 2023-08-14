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

export default function Septoria() {
  return (
    <View style={styles.container}>
     <Text style={styles.header}>Septoria</Text>
      <Text style={styles.subtext}>Fungus</Text>
      <Card.Cover
        source={require("../assets/septoria.jpeg")}
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
              • Pale grey to dark brown blotches on the leaves {"\n"}
              {"\n"}• Black fruiting bodies (pycnidia) within the blotches
              {"\n"}
              {"\n"}
              Septoria tritici blotch, also called Septoria leaf spot or
              speckled leaf blotch of wheat is caused by the fungus
              Mycosphaerella graminicola (asexual stage Zymoseptoria tritici,
              synonym Septoria tritici).{"\n"}
              Septoria tritici blotch survives from one season to the next on
              stubble. Following rain or heavy dew in late autumn and early
              winter, wind borne spores (ascospores) are released from fruiting
              bodies (perithecia) embedded in the stubble of previously infected
              plants. These spores can be spread over large distances.{"\n"}
              Early ascospore infections cause blotches on the leaves. Within
              these blotches a second type of fruiting body, pycnidia, are
              produced. Asexual spores ooze from pycnidia when the leaf surface
              is wet and spores are dispersed by splash to other leaves where
              they cause new infections.{"\n"}
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
              <Text style={styles.spraytext}>Propiconazole</Text>
            </Card.Content>
            <Card.Content style={styles.content}>
              <Image
                style={styles.image}
                source={require("../assets/spray.png")}
              />
              <Text style={styles.spraytext}>Cyproconazole</Text>
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
