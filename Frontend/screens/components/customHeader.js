// CustomHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/wheat-plant.png')}
        style={styles.image}/>
      <Text style={styles.title}>WheatWatch AI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
   
    marginBottom: "5%",
    marginTop: "5%",
    backgroundColor: 'peru',
    marginBottom: ""
    // borderRadius: 10,

    
  },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
    
    
//   },
  image: {
    width: "10%",
    height: "100%",
  },
});

export default CustomHeader;
